import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Header/>
  <NextNProgress
    color='rgb(25, 128, 188)'
    height={4}
  />
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
