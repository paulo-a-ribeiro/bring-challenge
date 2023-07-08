import type { AppProps } from 'next/app'
import GlobalStyles from '@/components/GlobalStyle'
import 'react-multi-carousel/lib/styles.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
