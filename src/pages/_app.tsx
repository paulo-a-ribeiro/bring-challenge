import type { AppProps } from 'next/app'
import GlobalStyles from '@/components/GlobalStyle'
import 'react-multi-carousel/lib/styles.css'
import CityContext from '@/context/CityContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
