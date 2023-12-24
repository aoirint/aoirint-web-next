import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import Navbar from '@/components/Navbar'

const FloorProjection: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>Kinectモーショントラッキングによる床プロジェクションゲーム</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <h1 className='title'>Kinectモーショントラッキングによる床プロジェクションゲーム</h1>
          <p className='subtitle'></p>
          <div className='contents'>
            <Image
              src='/activity/images/floor_projection.jpg'
              alt='Floor Projection Photo'
              width='800'
              height='600'
            />
            <p>
              研究開発系サークル
              <a href='https://imedia-lab.net/'>インタラクティブメディアラボ</a>
              にて、 チーム製作。
            </p>
            <p>大学文化祭（調布祭）2017にて、教室展示した。</p>
            <p>Unityなどを使用した。</p>
            <p>開発メンバーとして、ゲームアプリケーションの一部開発を担当した。</p>
            <p>
              GitHub Organization：
              <a href='https://github.com/imlGaze'>https://github.com/imlGaze</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default FloorProjection
