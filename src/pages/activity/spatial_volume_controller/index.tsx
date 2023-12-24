import Navbar from '@/components/Navbar'
import { Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const SpatialVolumeController: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>Spatial Volume Controller</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <CssBaseline />
        <Navbar />
        <Container component="main" sx={{ p: 3, width: '100%' }}>
          <Toolbar />
          <Typography variant="h4">
            Spatial Volume Controller
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            動画の音量を空間的なUIで調整するChrome拡張
          </Typography>
          <Box sx={{ my: 2 }}>
            <Image
              src='/activity/images/spatial_volume_controller.jpg'
              alt="Spatial Volume Controller Usage"
              width="800"
              height="600"
            />
          </Box>
          <Typography variant="body1" sx={{ my: 2 }}>
            <a href="https://talent.supporterz.jp/events/28d759c2-50b4-456d-889b-1f08abf6c053/">サポーターズ ウインターハッカソン vol.7</a>（2021年2月）にて、
            チーム<a href="https://github.com/miniature-octo-guide">Minuature Octo Guide</a>として製作。
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            Node.js / TypeScriptを使って開発した。
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            同ハッカソンにて、<a href="https://twitter.com/nacopaguu/status/1365963599538135041">最優秀賞</a>を受賞した。
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            GitHub：<a href="https://github.com/miniature-octo-guide/spatial-volume-controller">https://github.com/miniature-octo-guide/spatial-volume-controller</a>
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            Chrome Web Store：<a href="https://chrome.google.com/webstore/detail/pnkkbnogmhohlilallaniclhcekdahmm">https://chrome.google.com/webstore/detail/pnkkbnogmhohlilallaniclhcekdahmm</a>
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            開発メンバーとして、CI整備やコードレビュー、マージ作業ほかを担当した。
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default SpatialVolumeController
