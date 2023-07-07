import DailyWeather from '@/entities/DailyWeather'
import City from '@/entities/City'

export default interface DetailsResponse {
  city: City
  cod: string
  message: number
  cnt: number
  list: DailyWeather[]
}
