import Navbar from '@/components/Navbar'
import SoftwareCardList, { SoftwareCard } from '@/components/SoftwareCardList'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const eolSoftwareCards: SoftwareCard[] = [
]

const EolSoftwares: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>メンテナンスを終了したソフトウェア - aoirint</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <h1 className='title'>
            メンテナンスを終了したソフトウェア
          </h1>
          <h2 className='subtitle is-6 mb-4'>
            開発および保守を終了したソフトウェアを紹介します
          </h2>
          {eolSoftwareCards.length > 0 ? (
            <SoftwareCardList cards={eolSoftwareCards} />
          ) : (
            <p className='content'>
              現在、項目はありません。
            </p>
          )}
          <h2 className='title is-4 mt-5'>
            その他のソフトウェア
          </h2>
          <p className='content'>
            <ul>
              <li>
                <Link href="/software/">ソフトウェア一覧</Link>
              </li>
            </ul>
          </p>
        </div>
      </section>
    </>
  )
}

export default EolSoftwares
