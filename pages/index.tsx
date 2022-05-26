import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Landing from '../Components/LandingSection/Landing'
import OverlappingText from '../Components/OverlappingText/OverlappingText'
import styles from "../styles/home.module.css"
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lohitaksha | WebDev</title>
        <meta name="description" content="Lohitaksha Malhotra's portfolio website" />
          {/* Icons */}
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="512x512" href="/images/favicon-512x512.png"/>
      </Head>
        <Landing/>
        <OverlappingText backgroundtext='About me' toptext='A bit more about me'/>
    </div>
  )
}

export default Home
