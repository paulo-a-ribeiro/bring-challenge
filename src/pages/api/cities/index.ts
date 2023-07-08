import { NextApiRequest, NextApiResponse } from 'next'
import CityResponse from '@/entities/CityResponse'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { API_ROUTE, API_KEY } = process.env

    const citiesResponse = await Promise.all([
      fetch(`${API_ROUTE}/weather?q=Braga,pt&units=metric&appid=${API_KEY}`),
      fetch(`${API_ROUTE}/weather?q=London,uk&units=metric&appid=${API_KEY}`),
      fetch(`${API_ROUTE}/weather?q=Madrid,es&units=metric&appid=${API_KEY}`),
      fetch(
        `${API_ROUTE}/weather?q=Neuchatel,ch&units=metric&appid=${API_KEY}`,
      ),
      fetch(
        `${API_ROUTE}/weather?q=Amsterdam,nl&units=metric&appid=${API_KEY}`,
      ),
    ])

    const cities: CityResponse[] = await Promise.all(
      citiesResponse.map((response) => response.json()),
    )

    res.status(200).json(cities)
  } catch {
    res.status(500).json('Something went wrong')
  }
}
