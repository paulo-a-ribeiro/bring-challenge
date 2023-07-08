import {
  Description,
  Temperature,
  TemperatureMaxMin,
  Title,
  Wrapper,
} from '@/components/detailHeader/Styles'
import Image from 'next/image'
import { useContext } from 'react'
import { CityContext } from '@/context/CityContext'

export default function DetailHeader() {
  const { selectedCity } = useContext(CityContext)

  if (!selectedCity) return <></>

  const { name, weather, main } = selectedCity

  return (
    <Wrapper>
      <Title>{name}</Title>

      <Image
        className="icon-weather"
        src={`/icons/${weather[0].icon}.svg`}
        alt="weather icon"
        width={200}
        height={200}
      />
      <Temperature>{Math.round(main.temp)}º</Temperature>
      <Description>{weather[0].description}</Description>
      <TemperatureMaxMin>
        <span>H:{Math.round(main.temp_max)}º</span>
        <span>L:{Math.round(main.temp_min)}</span>
      </TemperatureMaxMin>
    </Wrapper>
  )
}
