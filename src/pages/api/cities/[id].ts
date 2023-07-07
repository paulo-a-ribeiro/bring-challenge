import { NextApiRequest, NextApiResponse } from 'next'
import DetailsResponse from '@/entities/DetailsResponse'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { API_ROUTE, API_KEY } = process.env

    const details: DetailsResponse[] = await fetch(
      `${API_ROUTE}/forecast/daily?q=${req.query.id}&cnt=5&appid=${API_KEY}`,
    ).then((res) => res.json())

    res.status(200).json(details)
  } catch {
    res.status(500).json('Something went wrong')
  }
}
