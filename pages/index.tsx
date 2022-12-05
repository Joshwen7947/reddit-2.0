import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/legacy/image";
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reddit 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header/>
    </div>
  )
}

export default Home
