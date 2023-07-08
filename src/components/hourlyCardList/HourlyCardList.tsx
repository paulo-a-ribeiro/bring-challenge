import Image from 'next/image'
import HourlyWeather from '@/entities/HourlyWeather'
import { Card, Hour, Temperature } from '@/components/hourlyCardList/Styles'
import Carousel from 'react-multi-carousel'

interface HourlyCardProps {
  hours: HourlyWeather[]
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
}
export default function HourlyCardList(props: HourlyCardProps) {
  const { hours } = props

  return (
    // <List>
    <Carousel responsive={responsive}>
      {hours.map((hour, index) => {
        const { weather, dt, temp } = hour

        return (
          <Card key={index}>
            <Hour>{new Date(dt * 1000).getHours()}h</Hour>
            <Image
              src={`/icons/${weather[0].icon}.svg`}
              alt="weather icon"
              width={50}
              height={50}
            />
            <Temperature>{Math.round(temp)}º</Temperature>
          </Card>
        )
      })}
    </Carousel>
    // </List>
  )
}
