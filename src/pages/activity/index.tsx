import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface WorkCard {
  title: string
  image: string
  imageAlt: string
  url: string
  subtitle: string
  date: string
}

const cards: WorkCard[] = [
  {
    title: 'Spatial Volume Controller',
    image: '/activity/images/spatial_volume_controller.jpg',
    imageAlt: 'Spatial Volume Controller Usage',
    url: '/activity/spatial_volume_controller/',
    subtitle: '動画の音量を空間的なUIで調整するChrome拡張',
    date: '2021',
  },
  {
    title: 'Holo Pick',
    image: '/activity/images/holopick.png',
    imageAlt: 'Holo Pick Usage',
    url: '/activity/holopick/',
    subtitle: '領域分割とペッパーズゴーストによる写真投影システム',
    date: '2019',
  },
  {
    title: 'UPLIGHT',
    image: '/activity/images/uplight.jpg',
    imageAlt: 'UPLIGHT Photo',
    url: '/activity/uplight/',
    subtitle: '全周囲ディスプレイを搭載した携帯型ゲーム機',
    date: '2019 ~',
  },
  {
    title: 'テーブルトップディスプレイを活用したグループプログラミング学習ツール',
    image: '/activity/images/tabletop_edu.jpg',
    imageAlt: 'Workshop Photo',
    url: '/activity/tabletop_edu/',
    subtitle: '',
    date: '2018',
  },
  // {
  //     title: 'GANによる人工言語向け架空文字生成',
  //     image: '/activity/images/blank.png',
  //     imageAlt: 'Blank',
  //     url: '/activity/artificial_characters/',
  //     subtitle: '',
  //     date: '2018',
  // },
  {
    title: 'Kinectモーショントラッキングによる床プロジェクションゲーム',
    image: '/activity/images/floor_projection.jpg',
    imageAlt: 'Floor Projection Photo',
    url: '/activity/floor_projection/',
    subtitle: '',
    date: '2017',
  },
  {
    title: 'mBed LCD Runner',
    image: '/activity/images/blank.png',
    imageAlt: 'Blank',
    url: '/activity/mbed_lcd_runner/',
    subtitle: '1ボタンキャラクタディスプレイ障害物避けゲーム',
    date: '2016',
  },
]

const Activities: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>作品ギャラリー - aoirint.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <h1 className='title'>
            作品ギャラリー
          </h1>
          {/* <p className='subtitle'>
                        関わった作品
                    </p> */}
          <div className='columns is-multiline'>
            {cards.map((card, cardIndex) => (
              <div key={cardIndex} className='column is-one-quarter'>
                <Link href={card.url}>
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <Image src={card.image} alt={card.imageAlt} width="800" height="600" />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">{card.title}</p>
                          <p className="subtitle is-6">{card.subtitle}</p>
                        </div>
                      </div>
                      <div className="content">
                        <p>
                          {card.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Activities
