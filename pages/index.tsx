import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/legacy/image";
import PostBox from '../components/PostBox';

const Home: NextPage = () => {
  return (
    <div className='max-w-5xl my-7 mx-auto'>
      <Head>
        <title>Reddit 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* post */}
      <PostBox/>
      <div className='flex'>
        {/* feed */}
      </div>
      
    </div>
  )
}

export default Home
