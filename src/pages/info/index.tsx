import {
  Box,
  Button,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material'
import MuiLink from '@mui/material/Link'
import Head from 'next/head'
import NextLink from 'next/link'
import React from 'react'
import Navbar from '@/components/Navbar'

interface InfoCardLink {
  text: string
  url: string
}

interface InfoCard {
  date: string
  text: string
  links: InfoCardLink[]
}

const cards: InfoCard[] = [
  {
    date: '2023-02-04',
    text: '「VOICEVOX OSS 放送 第2回」に開発者ゲストとして出演しました',
    links: [
      {
        text: 'VOICEVOXプロジェクト',
        url: 'https://voicevox.hiroshiba.jp/',
      },
      {
        text: 'ニコニコ生放送',
        url: 'https://live.nicovideo.jp/watch/lv340125951',
      },
      {
        text: '報告記事',
        url: 'https://blog.aoirint.com/entry/2023/voicevox_oss_broadcast_2nd/',
      },
    ],
  },
  {
    date: '2021-10-13',
    text: 'UIST 2021でUPLIGHTについて第二著者として研究発表しました',
    links: [
      {
        text: 'UPLIGHTプロジェクト',
        url: 'https://imedia-lab.net/iml-projects/uplight/',
      },
      {
        text: '論文（ACM）',
        url: 'https://dl.acm.org/doi/10.1145/3474349.3480207',
      },
      {
        text: 'UIST 2021',
        url: 'https://programs.sigchi.org/uist/2021/index/content/61515',
      },
    ],
  },
  {
    date: '2021-02-28',
    text: '技育祭 ウインターハッカソンvol7でSpatial Volume Control Appについて最優秀賞を受賞しました',
    links: [
      {
        text: 'Chrome Web Store',
        url: 'https://chrome.google.com/webstore/detail/pnkkbnogmhohlilallaniclhcekdahmm',
      },
      {
        text: '技育祭 ウインターハッカソンvol7',
        url: 'https://talent.supporterz.jp/events/28d759c2-50b4-456d-889b-1f08abf6c053/',
      },
    ],
  },
  {
    date: '2020-06-01',
    text: '第188回HCI研究会でUPLIGHTについて第二著者として研究発表しました',
    links: [
      {
        text: 'UPLIGHTプロジェクト',
        url: 'https://imedia-lab.net/iml-projects/uplight/',
      },
      {
        text: '第188回HCI研究会',
        url: 'https://www.ipsj.or.jp/kenkyukai/event/hci188ec56.html',
      },
    ],
  },
  {
    date: '2019-09-13',
    text: 'UPLIGHTがTGS2019 センス・オブ・ワンダーナイトでBEST Technological Game Awardを受賞しました',
    links: [
      {
        text: 'UPLIGHTプロジェクト',
        url: 'https://imedia-lab.net/iml-projects/uplight/',
      },
      {
        text: 'YouTube Live',
        url: 'https://www.youtube.com/live/mdvo-hPPJwA?t=2859',
      },
      {
        text: 'TGS2019 センス・オブ・ワンダーナイト',
        url: 'https://expo.nikkeibp.co.jp/tgs/2019/exhibition/sown/',
      },
    ],
  },
]

const Infos: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>おしらせ - aoirint</title>
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
          <Typography variant='h4'>おしらせ</Typography>
          <Typography variant='subtitle1' color='text.secondary' gutterBottom>
            イベント参加などのアナウンスを掲載します
          </Typography>
          <Grid container spacing={2}>
            <Table sx={{ my: 2 }}>
              <TableBody>
                {cards.map((card, cardIndex) => (
                  <TableRow key={cardIndex}>
                    <TableCell align='center' style={{ verticalAlign: 'top' }}>
                      <Typography variant='body2'>{card.date}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='body2' gutterBottom>
                        {card.text}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-start',
                          flexWrap: 'wrap',
                          gap: '8px',
                        }}
                      >
                        {card.links.map((link, linkIndex) => (
                          <Button key={linkIndex} variant='outlined' size='small' href={link.url}>
                            {link.text}
                          </Button>
                        ))}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Infos
