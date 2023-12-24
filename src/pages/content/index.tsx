import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Toolbar, Typography } from '@mui/material'
import MuiLink from '@mui/material/Link'
import NextLink  from 'next/link'

interface ContentCard {
  title: string
  description: string
  image: string
  imageAlt: string
  url: string
}

const cards: ContentCard[] = [
  {
    title: 'えやみぐさ 技術ノート',
    description: 'プログラミングや電子工作に関する記事を投稿しています（2017年～）',
    image: '/content/images/blank.png',
    imageAlt: 'Blank Image',
    url: 'https://blog.aoirint.com/channel/%E6%8A%80%E8%A1%93%E3%83%8E%E3%83%BC%E3%83%88/',
  },
  {
    title: 'Qiita @aoirint',
    description: 'プログラミングに関する記事を投稿しています（2020年）',
    image: '/content/images/qiita.png',
    imageAlt: 'Qiita Icon',
    url: 'https://qiita.com/aoirint',
  },
  // {
  //   title: 'Wiki',
  //   description: '個人Wiki',
  //   image: BlankImage,
  //   imageAlt: 'Blank Image',
  //   url: 'https://wiki.aoirint.com',
  // },
]

const Contents: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>コンテンツ - aoirint</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <CssBaseline />
        <Navbar />
        <Container component="main" sx={{ m: 4, width: '100%' }}>
          <Toolbar />
          <Typography variant="h4">
            コンテンツ
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            技術情報の発信をしています
          </Typography>
          <Grid container spacing={2}>
            {cards.map((card, cardIndex) => (
              <Grid item xs={12} lg={6} key={cardIndex}>
                <Card sx={{ display: 'flex', height: '100%', p: 2 }}>
                  <Box sx={{ my: 1 }}>
                    <CardMedia
                      sx={{ width: 64, height: 64 }}
                      image={card.image}
                      title={card.imageAlt}
                    />
                  </Box>
                  <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <CardContent sx={{ py: 0 }}>
                      <Typography variant="h6" component="div">
                          {card.title}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        {card.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ ml: 1 }}>
                      {card.url != null ? (
                        <Button size="medium" variant="contained" color="primary">
                          <NextLink href={card.url} passHref legacyBehavior>
                            <MuiLink color="inherit" underline="none">
                              見てみる
                            </MuiLink>
                          </NextLink>
                        </Button>
                      ) : ''}
                    </CardActions>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Contents
