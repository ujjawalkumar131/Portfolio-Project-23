import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
