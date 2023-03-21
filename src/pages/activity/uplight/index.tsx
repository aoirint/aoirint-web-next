import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'


const Uplight: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>UPLIGHT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <h1 className='title'>
            UPLIGHT
          </h1>
          <p className='subtitle'>
            全周囲ディスプレイを搭載した携帯型ゲーム機
          </p>
          <div className='content'>
            <Image
              src="/activity/images/uplight.jpg"
              alt="Uplight Photo"
              width="800"
              height="600"
            />
            <p>
              研究開発系サークル<a href="https://imedia-lab.net/">インタラクティブメディアラボ</a>にて、
              <a href="https://imedia-lab.net/iml-projects/uplight/">UPLIGHTプロジェクト</a>として製作。
            </p>
            <p>
              <a href="https://expo.nikkeibp.co.jp/tgs/2019/exhibition/sown/">東京ゲームショウ2019 センス・オブ・ワンダーナイト</a> 選考ブースに採択され、
              ファイナリスト選出のうえ、<a href="https://expo.nikkeibp.co.jp/tgs/2019/sown/sensefinal.html">Best Technological Game Award</a>を受賞した。
            </p>
            <p>
              Arduino, Unity, 3Dプリンタ, レーザ加工機などを使用した。
            </p>
            <p>
              開発メンバーとして、電装やミドルウェアほかを担当した。
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Uplight
