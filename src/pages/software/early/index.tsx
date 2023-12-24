import { Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
import MuiLink from '@mui/material/Link'
import Head from 'next/head'
import NextLink from 'next/link'
import React from 'react'
import Navbar from '@/components/Navbar'
import SoftwareCardList, { SoftwareCard } from '@/components/SoftwareCardList'

const earlySoftwareCards: SoftwareCard[] = []

const EarlySoftwares: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>開発早期のソフトウェア - aoirint</title>
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
          <Typography variant='h4'>開発早期のソフトウェア</Typography>
          <Typography variant='subtitle1' color='text.secondary' gutterBottom>
            アルファ版・ベータ版の開発早期段階にあるソフトウェアを紹介します
          </Typography>
          {earlySoftwareCards.length > 0 ? (
            <SoftwareCardList cards={earlySoftwareCards} />
          ) : (
            <Typography variant='body1'>現在、項目はありません。</Typography>
          )}
          <Typography variant='h5' sx={{ mt: 3 }}>
            その他のソフトウェア
          </Typography>
          <ul>
            <li>
              <NextLink href='/software/' passHref legacyBehavior>
                <MuiLink>
                  <Typography component='span' lineHeight={2}>
                    ソフトウェア一覧
                  </Typography>
                </MuiLink>
              </NextLink>
            </li>
          </ul>
        </Container>
      </Box>
    </>
  )
}

export default EarlySoftwares
