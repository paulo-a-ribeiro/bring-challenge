import HourlyWeather from '@/entities/HourlyWeather'

export default interface HourlyResponse {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  hourly: HourlyWeather[]
}
