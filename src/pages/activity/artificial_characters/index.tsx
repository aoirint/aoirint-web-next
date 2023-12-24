import { Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
import MuiLink from '@mui/material/Link'
import Head from 'next/head'
import NextLink from 'next/link'
import React from 'react'
import Navbar from '@/components/Navbar'

const ArtificialCharacters: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>GANによる人工言語向け架空文字生成</title>
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
          <Typography variant='h4' gutterBottom>
            GANによる人工言語向け架空文字生成
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            PBL講義
            <NextLink href='http://pr.cei.uec.ac.jp/kobo2018/index.php' passHref legacyBehavior>
              <MuiLink>情報工学工房2018 テーマ「Pythonによる深層学習」</MuiLink>
            </NextLink>
            にて、 個人製作。
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            PyTorch、DCGANなどを使用した。
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default ArtificialCharacters
