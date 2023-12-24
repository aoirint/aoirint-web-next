import Navbar from '@/components/Navbar'
import { Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const HoloPick: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>Holo Pick</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <CssBaseline />
        <Navbar />
        <Container component="main" sx={{ p: 3, width: '100%' }}>
          <Toolbar />
          <Typography variant="h4">
            Holo Pick
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            領域分割とペッパーズゴーストによる写真投影システム
          </Typography>
          <Box sx={{ my: 2 }}>
            <Image
              src="/activity/images/holopick.png"
              alt="Holo Pick Usage"
              width="800"
              height="600"
            />
          </Box>
          <Typography variant="body1" sx={{ my: 2 }}>
            <a href="https://www.ce.uec.ac.jp/projects/">PBL講義 ICCD2019</a>にて、チームKとして製作。
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            PyTorch/TorchScript, Android スマートフォン, Jetson Nano, 3Dプリンタなどを使用した。
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            開発メンバーとして、深層学習、Jetson Nano組み込みアプリ、電装ほかを担当した。
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default HoloPick
