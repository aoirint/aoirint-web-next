import { Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
import MuiLink from '@mui/material/Link'
import Head from 'next/head'
import NextLink from 'next/link'
import React from 'react'
import Navbar from '@/components/Navbar'

const MbedLcdRunner: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>mBed LCD Runner</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
          <Typography variant='h4'>mBed LCD Runner</Typography>
          <Typography variant='subtitle1' color='text.secondary' gutterBottom>
            1ボタンキャラクタディスプレイ障害物避けゲーム
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            高校の部活動にて、 チーム製作。
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            高校文化祭（2016）にて展示した。
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            mBed、C++、キャラクタディスプレイなどを使用した。
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            開発メンバーとして、主要なプログラムの開発を担当した。
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            開発途中のサルベージ版プログラム：
            <NextLink
              href='https://gist.github.com/aoirint/d6bd55c0f4f02582ae7c4069b6486e4c'
              passHref
              legacyBehavior
            >
              <MuiLink>https://gist.github.com/aoirint/d6bd55c0f4f02582ae7c4069b6486e4c</MuiLink>
            </NextLink>
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default MbedLcdRunner
