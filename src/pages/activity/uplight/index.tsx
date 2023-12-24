import { Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
import MuiLink from '@mui/material/Link'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'
import Navbar from '@/components/Navbar'

const Uplight: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>UPLIGHT</title>
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
          <Typography variant='h4'>UPLIGHT</Typography>
          <Typography variant='subtitle1' color='text.secondary' gutterBottom>
            全周囲ディスプレイを搭載した携帯型ゲーム機
          </Typography>
          <Box sx={{ my: 2 }}>
            <Image
              src='/activity/images/uplight.jpg'
              alt='Uplight Photo'
              width='800'
              height='600'
            />
          </Box>
          <Typography variant='body1' sx={{ my: 2 }}>
            研究開発系サークル
            <NextLink href='https://imedia-lab.net/' passHref legacyBehavior>
              <MuiLink>インタラクティブメディアラボ</MuiLink>
            </NextLink>
            にて、
            <NextLink href='https://imedia-lab.net/iml-projects/uplight/' passHref legacyBehavior>
              <MuiLink>UPLIGHTプロジェクト</MuiLink>
            </NextLink>
            として製作。
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            <NextLink
              href='https://expo.nikkeibp.co.jp/tgs/2019/exhibition/sown/'
              passHref
              legacyBehavior
            >
              <MuiLink>東京ゲームショウ2019 センス・オブ・ワンダーナイト</MuiLink>
            </NextLink>{' '}
            選考ブースに採択され、 ファイナリスト選出のうえ、
            <NextLink
              href='https://expo.nikkeibp.co.jp/tgs/2019/sown/sensefinal.html'
              passHref
              legacyBehavior
            >
              <MuiLink>Best Technological Game Award</MuiLink>
            </NextLink>
            を受賞した。
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            Arduino, Unity, 3Dプリンタ, レーザ加工機などを使用した。
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            開発メンバーとして、電装やミドルウェアほかを担当した。
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default Uplight
