import Coordinates from '@/entities/Coordinates'

export default interface City {
  id: number
  name: string
  coord: Coordinates
  country: string
  population: number
  timezone: number
}
