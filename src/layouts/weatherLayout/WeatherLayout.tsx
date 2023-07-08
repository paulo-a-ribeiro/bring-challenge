import CityList from '@/components/cityList/CityList'
import { Content, List, Wrapper } from '@/layouts/weatherLayout/Styles'
import CityContext from '@/context/CityContext'

export default function WeatherLayout(props: any) {
  return (
    <CityContext>
      <Wrapper>
        <List>
          <CityList />
        </List>
        <Content>{props.children}</Content>
      </Wrapper>
    </CityContext>
  )
}
