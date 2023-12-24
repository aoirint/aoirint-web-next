import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Navbar from '@/components/Navbar'

const HoloPick: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>Holo Pick</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <h1 className='title'>Holo Pick</h1>
          <p className='subtitle'>領域分割とペッパーズゴーストによる写真投影システム</p>
          <div className='contents'>
            <Image
              src='/activity/images/holopick.png'
              alt='Holo Pick Usage'
              width='800'
              height='600'
            />
            <p>
              <a href='https://www.ce.uec.ac.jp/projects/'>PBL講義 ICCD2019</a>
              にて、チームKとして製作。
            </p>
            <p>
              PyTorch/TorchScript, Android スマートフォン, Jetson Nano, 3Dプリンタなどを使用した。
            </p>
            <p>開発メンバーとして、深層学習、Jetson Nano組み込みアプリ、電装ほかを担当した。</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default HoloPick
