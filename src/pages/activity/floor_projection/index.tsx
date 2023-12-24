
import { Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
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
      <Box sx={{ display: 'flex', width: '100%' }}>
        <CssBaseline />
        <Navbar />
        <Container component='main' sx={{ m: 4, width: '100%' }}>
          <Toolbar />
          <Typography variant='h4' gutterBottom>
            Kinectモーショントラッキングによる床プロジェクションゲーム
          </Typography>
          <Box sx={{ my: 2 }}>
            <Image
              src='/activity/images/floor_projection.jpg'
              alt='Floor Projection Photo'
              width='800'
              height='600'
            />
          </Box>
          <Typography variant='body1' sx={{ my: 2 }}>
            研究開発系サークル<a href='https://imedia-lab.net/'>インタラクティブメディアラボ</a>
            にて、 チーム製作。
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            大学文化祭（調布祭）2017にて、教室展示した。
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            Unityなどを使用した。
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            開発メンバーとして、ゲームアプリケーションの一部開発を担当した。
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            GitHub Organization：<a href='https://github.com/imlGaze'>https://github.com/imlGaze</a>
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default FloorProjection
