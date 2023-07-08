import { NextApiRequest, NextApiResponse } from 'next'
import HourlyResponse from '@/entities/HourlyResponse'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { API_ROUTE, API_KEY } = process.env
    const { latitude, longitude } = req.query

    const details: HourlyResponse = await fetch(
      `${API_ROUTE}/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,current,alerts&units=metric&appid=${API_KEY}`,
    ).then((res) => res.json())

    // details.hourly.filter((detail) => {
    //   const date = new Date()
    //   date.setHours(11, 0, 0, 0)
    //
    //   console.log('-----')
    //   console.log(date)
    //   console.log(new Date(detail.dt * 1000))
    //
    //   return new Date(detail.dt * 1000).getHours() <= 23
    // })

    res.status(200).json(details)
  } catch {
    res.status(500).json('Something went wrong')
  }
}
