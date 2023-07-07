import Link from 'next/link'
import { GetServerSideProps } from 'next'
import CityResponse from '@/entities/CityResponse'
import Text from '@/components/Text'

interface Props {
  cities: CityResponse[]
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const cities = await fetch(`${process.env.BASE_URL}/api/cities`).then((res) =>
    res.json(),
  )

  return { props: { cities } }
}

export default function Home(props: Props) {
  const { cities } = props
  return (
    <div>
      <Text>hello</Text>
      {cities.map((city) => {
        return (
          <div key={city.name}>
            <Link href={`/${city.name.toLowerCase()}`}>{city.name}</Link>
          </div>
        )
      })}
    </div>
  )
}
