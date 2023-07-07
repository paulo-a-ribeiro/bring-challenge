import Temperature from '@/entities/Temperature'
import FeelsLike from '@/entities/FeelsLike'
import Weather from '@/entities/Weather'

export default interface DailyWeather {
  dt: number
  sunrise: number
  sunset: number
  temp: Temperature
  feels_like: FeelsLike
  pressure: number
  humidity: number
  weather: Weather[]
  speed: number
  deg: number
  gust: number
  clouds: number
  pop: number
  rain?: number
}
