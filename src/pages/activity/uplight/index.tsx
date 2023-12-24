import { Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
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
            研究開発系サークル<a href='https://imedia-lab.net/'>インタラクティブメディアラボ</a>
            にて、
            <a href='https://imedia-lab.net/iml-projects/uplight/'>UPLIGHTプロジェクト</a>
            として製作。
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            <a href='https://expo.nikkeibp.co.jp/tgs/2019/exhibition/sown/'>
              東京ゲームショウ2019 センス・オブ・ワンダーナイト
            </a>{' '}
            選考ブースに採択され、 ファイナリスト選出のうえ、
            <a href='https://expo.nikkeibp.co.jp/tgs/2019/sown/sensefinal.html'>
              Best Technological Game Award
            </a>
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
