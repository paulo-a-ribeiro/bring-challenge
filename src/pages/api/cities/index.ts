import { NextApiRequest, NextApiResponse } from 'next'
import CityResponse from '@/entities/CityResponse'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { API_ROUTE, API_KEY } = process.env

    const citiesResponse = await Promise.all([
      fetch(`${API_ROUTE}/weather?q=Braga,pt&appid=${API_KEY}`),
      fetch(`${API_ROUTE}/weather?q=London,uk&appid=${API_KEY}`),
      fetch(`${API_ROUTE}/weather?q=Madrid,es&appid=${API_KEY}`),
      fetch(`${API_ROUTE}/weather?q=Neuchatel,ch&appid=${API_KEY}`),
      fetch(`${API_ROUTE}/weather?q=Amsterdam,nl&appid=${API_KEY}`),
    ])

    const cities: CityResponse[] = await Promise.all(
      citiesResponse.map((response) => response.json()),
    )

    res.status(200).json(cities)
  } catch {
    res.status(500).json('Something went wrong')
  }
}
