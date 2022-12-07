import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/legacy/image";
import PostBox from '../components/PostBox';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reddit 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* post */}
      <PostBox/>
      <div>
        {/* feed */}
      </div>
      
    </div>
  )
}

export default Home
