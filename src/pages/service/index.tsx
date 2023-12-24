import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Navbar from '@/components/Navbar'

interface ServiceCard {
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  url: string
}

const cards: ServiceCard[] = [
  {
    title: 'nalypoll.aoirint.com',
    subtitle: 'Nalypoll',
    description: 'Twitterの投票経過をグラフ化するWebアプリ',
    image: '/service/images/blank.png',
    imageAlt: 'Blank Image',
    url: 'https://nalypoll.aoirint.com',
  },
  {
    title: 'mstdn.aoirint.com',
    subtitle: 'Mastodon',
    description: 'SNS（Fediverse）',
    image: '/service/images/mastodon.svg',
    imageAlt: 'Mastodon Logo',
    url: 'https://mstdn.aoirint.com',
  },
  {
    title: 'gitea.aoirint.com',
    subtitle: 'Gitea',
    description: 'コードホスティング',
    image: '/service/images/gitea.svg',
    imageAlt: 'Gitea Logo',
    url: 'https://gitea.aoirint.com',
  },
  {
    title: 'nc.aoirint.com',
    subtitle: 'Nextcloud',
    description: 'クラウドストレージ',
    image: '/service/images/nextcloud.svg',
    imageAlt: 'Nextcloud Logo',
    url: 'https://nc.aoirint.com',
  },
]

const Services: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>サービス - aoirint</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <h1 className='title'>サービス</h1>
          <div className='columns is-multiline'></div>
          <div className='columns is-multiline'>
            {cards.map((card, cardIndex) => (
              <div
                key={cardIndex}
                className='column is-half-desktop is-one-third-widescreen is-one-quarter-fullhd'
              >
                <a href={card.url}>
                  <div className='box'>
                    <article className='media'>
                      <div className='media-left'>
                        <figure className='image is-1by1 is-64x64'>
                          <Image src={card.image} alt={card.imageAlt} width='64' height='64' />
                        </figure>
                      </div>
                      <div className='media-content'>
                        <div className='content'>
                          <h3 className='title is-4'>{card.title}</h3>
                          <h4 className='subtitle is-6 mb-2'>{card.subtitle}</h4>
                          <p>{card.description}</p>
                        </div>
                      </div>
                    </article>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
