import {
  List,
  Item,
  Row,
  Temperature,
  CityName,
  CityTemp,
  Column,
  WindSpeed,
  TemperatureMaxMin,
} from './Styles'
import Image from 'next/image'
import Link from 'next/link'
import CityResponse from '@/entities/CityResponse'
import useSWR from 'swr'
import Loader from '@/components/loader/Loader'
import { useContext, useEffect } from 'react'
import { CityContext } from '@/context/CityContext'
import { usePathname } from 'next/navigation'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function CityList() {
  const { setSelectedCity, selectedCity } = useContext(CityContext)
  const pathname = usePathname()
  const { data, isLoading } = useSWR<CityResponse[]>('/api/cities', fetcher)

  useEffect(() => {
    const city = data?.find((item) => {
      const lat = pathname.split('/')[2]
      const lon = pathname.split('/')[3]

      return item.coord.lat === Number(lat) && item.coord.lon === Number(lon)
    })

    setSelectedCity(city)
  }, [data, pathname, setSelectedCity])

  if (isLoading) {
    return <Loader />
  }

  if (!data) return <></>

  return (
    <List>
      {data.map((city, index) => {
        const { name, weather, main, coord } = city

        return (
          <Item
            key={`${name}-${index}`}
            className={
              coord.lon === selectedCity?.coord.lon &&
              coord.lat === selectedCity.coord.lat
                ? 'active'
                : ''
            }
            onClick={() => setSelectedCity(city)}
          >
            <Link href={`/weather/${coord.lat}/${coord.lon}`}>
              <Row>
                <CityName>{name}</CityName>
                <Temperature>
                  <Image
                    className="icon-weather"
                    src={`/icons/${weather[0].icon}.svg`}
                    alt="weather icon"
                    width={30}
                    height={30}
                  />
                  <CityTemp>{Math.round(main.temp)}º</CityTemp>
                </Temperature>
              </Row>

              <Row>
                <Column>
                  <Image
                    className="icon-weather"
                    src={`/icons/wind.svg`}
                    alt="weather icon"
                    width={10}
                    height={10}
                  />
                  <WindSpeed>{Math.round(city.wind.speed * 3.6)}km/h</WindSpeed>
                </Column>
                <Column>
                  <TemperatureMaxMin>
                    <span className="text-bold">H:</span>
                    <span>{Math.round(city.main.temp_max)}º</span>
                  </TemperatureMaxMin>
                  <TemperatureMaxMin>
                    <span className="text-bold">H:</span>
                    <span>{Math.round(city.main.temp_min)}º</span>
                  </TemperatureMaxMin>
                </Column>
              </Row>
            </Link>
          </Item>
        )
      })}
    </List>
  )
}
