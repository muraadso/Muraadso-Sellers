import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import About from '../components/About'
import Howtoreg from '../components/Howtoreg'
import styles from '../styles/Home.module.css'
import Whatsell from '../components/Whatsell'
import Howtolist from '../components/Howtolist'
import Whyus from '../components/Whyus'
import { How } from '../components/How'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Muraadso Sellers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Hero />    
      <About />
      <How />    
      <Whatsell />
      <Howtoreg />
      <Howtolist />
      <Whyus />
    </div>
  )
}
