import { Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
import MuiLink from '@mui/material/Link'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'
import Navbar from '@/components/Navbar'

const TabletopEdu: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>テーブルトップディスプレイを活用したグループプログラミング学習ツール</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <CssBaseline />
        <Navbar />
        <Container component='main' sx={{ m: 4, width: '100%' }}>
          <Toolbar />
          <Typography variant='h4'>
            テーブルトップディスプレイを活用したグループプログラミング学習ツール
          </Typography>
          <Box sx={{ my: 2 }}>
            <Image
              src='/activity/images/tabletop_edu.jpg'
              alt='Workshop Photo'
              width='800'
              height='600'
            />
          </Box>
          <Typography variant='body1' sx={{ my: 2 }}>
            （画像は前身となるシステムを利用したプログラミングワークショップの様子）
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            研究開発系サークル
            <NextLink href='https://imedia-lab.net/' passHref legacyBehavior>
              <MuiLink>インタラクティブメディアラボ</MuiLink>
            </NextLink>
            にて、 チーム製作。
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            <NextLink
              href='https://www.uec.ac.jp/news/announcement/2018/20180627_1107.html'
              passHref
              legacyBehavior
            >
              <MuiLink>UECものづくりコンテスト2018</MuiLink>
            </NextLink>
            にて、株式会社フローベル賞を受賞。
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            テーブルトップディスプレイシステム PacPac、Unity、Processing、Node.js / express /
            socket.ioなどを使用した。
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            開発メンバーとして、サーバサイドの開発を担当した。
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default TabletopEdu
