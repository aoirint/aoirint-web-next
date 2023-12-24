import Navbar from '@/components/Navbar'
import { Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'

const MbedLcdRunner: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>mBed LCD Runner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <CssBaseline />
        <Navbar />
        <Container component="main" sx={{ p: 3, width: '100%' }}>
          <Toolbar />
          <Typography variant="h4">
            mBed LCD Runner
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            1ボタンキャラクタディスプレイ障害物避けゲーム
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            高校の部活動にて、
            チーム製作。
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            高校文化祭（2016）にて展示した。
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            mBed、C++、キャラクタディスプレイなどを使用した。
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            開発メンバーとして、主要なプログラムの開発を担当した。
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            開発途中のサルベージ版プログラム：<a href="https://gist.github.com/aoirint/d6bd55c0f4f02582ae7c4069b6486e4c">https://gist.github.com/aoirint/d6bd55c0f4f02582ae7c4069b6486e4c</a>
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default MbedLcdRunner
