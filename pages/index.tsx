import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GoogleAnalytics } from '../components/GoogleAnalytics'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1> Hello everyone</h1>
      <GoogleAnalytics />
      
    </div>
  )
}

export default Home
