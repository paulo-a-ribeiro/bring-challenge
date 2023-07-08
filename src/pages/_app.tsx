import type { AppProps } from 'next/app'
import GlobalStyles from '@/components/GlobalStyle'
import 'react-multi-carousel/lib/styles.css'
import { AnimatePresence } from 'framer-motion'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <AnimatePresence initial={false} mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}
