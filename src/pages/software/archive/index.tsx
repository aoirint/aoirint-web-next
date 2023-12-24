import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Navbar from '@/components/Navbar'
import SoftwareCardList, { SoftwareCard } from '@/components/SoftwareCardList'

const archiveSoftwareCards: SoftwareCard[] = [
  {
    title: 'Nalypoll',
    description: 'Twitterの投票経過をグラフ化するWebアプリ',
    image: '/software/images/blank.png',
    imageAlt: 'Blank Image',
    useUrl: null,
    archiveUrl: 'https://nalypoll.aoirint.com',
    sourceCodeUrl: 'https://github.com/aoirint/nalypoll',
    detailUrl: null,
    sourceProjectUrl: null,
  },
]

const archiveDockerImageCards: SoftwareCard[] = [
  {
    title: 'LoRA Easy Training Scripts',
    description: 'Stable Diffusion系の画像生成モデル用のLoRAを訓練するスクリプト',
    image: '/software/images/blank.png',
    imageAlt: 'Blank Image',
    useUrl: null,
    archiveUrl: 'https://hub.docker.com/r/aoirint/lora_ets',
    sourceCodeUrl: 'https://github.com/aoirint/LoRA_Easy_Training_Scripts_docker',
    detailUrl: null,
    sourceProjectUrl: 'https://github.com/derrian-distro/LoRA_Easy_Training_Scripts',
  },
]

const ArchiveSoftwares: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>メンテナンスを終了したソフトウェア - aoirint</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <h1 className='title'>メンテナンスを終了したソフトウェア</h1>
          <h2 className='subtitle is-6 mb-4'>開発および保守を終了したソフトウェアを紹介します</h2>
          {archiveSoftwareCards.length > 0 ? (
            <SoftwareCardList cards={archiveSoftwareCards} />
          ) : (
            <p className='content'>現在、項目はありません。</p>
          )}
          <h2 className='title is-4 mt-5'>Dockerイメージ</h2>
          <h3 className='subtitle is-6 mb-4'>OSSソフトウェアをDockerイメージ化していました</h3>
          {archiveDockerImageCards.length > 0 ? (
            <SoftwareCardList cards={archiveDockerImageCards} />
          ) : (
            <p className='content'>現在、項目はありません。</p>
          )}
          <h2 className='title is-4 mt-5'>その他のソフトウェア</h2>
          <p className='content'>
            <ul>
              <li>
                <Link href='/software/'>ソフトウェア一覧</Link>
              </li>
            </ul>
          </p>
        </div>
      </section>
    </>
  )
}

export default ArchiveSoftwares
