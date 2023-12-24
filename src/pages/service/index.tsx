import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'
import { Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
import ServiceCardList, { ServiceCard } from '@/components/ServiceCardList'

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <CssBaseline />
        <Navbar />
        <Container component="main" sx={{ m: 4, width: '100%' }}>
          <Toolbar />
          <Typography variant="h4">
            サービス
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            運用しているサービス（個人用含む）を掲載します
          </Typography>
          <ServiceCardList cards={cards} />
        </Container>
      </Box>
    </>
  )
}

export default Services
