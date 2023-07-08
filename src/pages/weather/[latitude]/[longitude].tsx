import { GetServerSideProps } from 'next'
import WeatherLayout from '@/layouts/weatherLayout/WeatherLayout'
import HourlyResponse from '@/entities/HourlyResponse'
import HourlyCardList from '@/components/hourlyCardList/HourlyCardList'
import { Layout } from '@/pages/weather/[latitude]/Style'
import DetailHeader from '@/components/detailHeader/DetailHeader'
import Transition from '@/components/Transition'

interface Props {
  details: HourlyResponse
}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { BASE_URL } = process.env
  const { latitude, longitude } = query

  const response = await fetch(
    `${BASE_URL}/api/cities/${latitude}/${longitude}`,
  )
  const details = await response.json()

  return { props: { details } }
}
export default function Detail(props: Props, ref: IndexPageRef) {
  return (
    <WeatherLayout>
      <Transition>
        <Layout>
          <DetailHeader />
          <HourlyCardList hours={props.details.hourly} />
        </Layout>
      </Transition>
    </WeatherLayout>
  )
}
