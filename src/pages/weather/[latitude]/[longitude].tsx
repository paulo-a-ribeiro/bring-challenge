import { GetServerSideProps } from 'next'
import WeatherLayout from '@/layouts/weatherLayout/WeatherLayout'
import HourlyResponse from '@/entities/HourlyResponse'
import HourlyCardList from '@/components/hourlyCardList/HourlyCardList'
import { Layout } from '@/pages/weather/[latitude]/Style'
import DetailHeader from '@/components/detailHeader/DetailHeader'
import { useRouter } from 'next/router'

interface Props {
  details: HourlyResponse
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { BASE_URL } = process.env
  const { latitude, longitude } = query

  const response = await fetch(
    `${BASE_URL}/api/cities/${latitude}/${longitude}`,
  )
  const details = await response.json()

  return { props: { details } }
}
export default function Detail(props: Props) {
  const router = useRouter()

  return (
    <WeatherLayout>
      <Layout>
        <DetailHeader />
        <HourlyCardList hours={props.details.hourly} />
      </Layout>
    </WeatherLayout>
  )
}
