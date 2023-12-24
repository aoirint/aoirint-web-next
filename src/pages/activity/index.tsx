import Navbar from '@/components/Navbar'
import { Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
import WorkCardList, { WorkCard } from '@/components/WorkCardList'
import Head from 'next/head'
import React from 'react'

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
        <title>作品ギャラリー - aoirint</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <CssBaseline />
        <Navbar />
        <Container component="main" sx={{ p: 3, width: '100%' }}>
          <Toolbar />
          <Typography variant="h4">
            作品ギャラリー
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            関わった作品を掲載します
          </Typography>
          <WorkCardList cards={cards} />
        </Container>
      </Box>
    </>
  )
}

export default Activities
