import Coordinates from '@/entities/Coordinates'
import SystemInfo from '@/entities/SystemInfo'
import Clouds from '@/entities/Clouds'
import Wind from '@/entities/Wind'
import Weather from '@/entities/Weather'
import MainWeatherInfo from '@/entities/MainWeatherInfo'

export default interface CityResponse {
  coord: Coordinates
  weather: Weather[]
  base: string
  main: MainWeatherInfo
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: SystemInfo
  timezone: number
  id: number
  name: string
  cod: number
}
