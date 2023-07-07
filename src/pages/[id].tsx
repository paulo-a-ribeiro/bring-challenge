import Link from 'next/link'
import { GetServerSideProps } from 'next'
import DetailsResponse from '@/entities/DetailsResponse'

interface Props {
  details: DetailsResponse
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const { BASE_URL } = process.env
  const { id } = query

  const details = await fetch(`${BASE_URL}/api/cities/${id}`).then((res) =>
    res.json(),
  )

  return { props: { details } }
}

export default function Home(props: Props) {
  const { details } = props
  console.log(details)
  return (
    <div>
      <h1>hello</h1>
      <div>
        <h2>{details.city.name}</h2>
      </div>
      {details.list.map((detail) => {
        return <div key={detail.clouds}>{detail.clouds}</div>
      })}
    </div>
  )
}
