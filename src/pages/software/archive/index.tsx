import Navbar from '@/components/Navbar'
import SoftwareCardList, { SoftwareCard } from '@/components/SoftwareCardList'
import { Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'
import MuiLink from '@mui/material/Link'
import NextLink  from 'next/link'
import React from 'react'

const archiveSoftwareCards: SoftwareCard[] = [
  {
    title: 'Nalypoll',
    description: 'Twitterの投票経過をグラフ化するWebアプリ',
    image: '/software/images/blank.png',
    imageAlt: 'Blank Image',
    useUrl: null,
    archiveUrl: 'https://nalypoll.aoirint.com',
    sourceCodeUrl: 'https://github.com/aoirint/nalypoll',
    detailUrl: null,
    sourceProjectUrl: null,
  },
]

const archiveDockerImageCards: SoftwareCard[] = [
  {
    title: 'LoRA Easy Training Scripts',
    description: 'Stable Diffusion系の画像生成モデル用のLoRAを訓練するスクリプト',
    image: '/software/images/blank.png',
    imageAlt: 'Blank Image',
    useUrl: null,
    archiveUrl: 'https://hub.docker.com/r/aoirint/lora_ets',
    sourceCodeUrl: 'https://github.com/aoirint/LoRA_Easy_Training_Scripts_docker',
    detailUrl: null,
    sourceProjectUrl: 'https://github.com/derrian-distro/LoRA_Easy_Training_Scripts',
  },
]

const ArchiveSoftwares: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>メンテナンスを終了したソフトウェア - aoirint</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <CssBaseline />
        <Navbar />
        <Container component="main" sx={{ p: 3, width: '100%' }}>
          <Toolbar />
          <Typography variant="h4">
            メンテナンスを終了したソフトウェア
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            開発および保守を終了したソフトウェアを紹介します
          </Typography>
          {archiveSoftwareCards.length > 0 ? (
            <SoftwareCardList cards={archiveSoftwareCards} />
          ) : (
            <Typography variant="body1">
              現在、項目はありません。
            </Typography>
          )}
          <Typography variant="h5" sx={{ mt: 3 }}>
            Dockerイメージ
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            OSSソフトウェアをDockerイメージ化していました
          </Typography>
          {archiveDockerImageCards.length > 0 ? (
            <SoftwareCardList cards={archiveDockerImageCards} />
          ) : (
            <p className='content'>
              現在、項目はありません。
            </p>
          )}
          <Typography variant="h5" sx={{ mt: 3 }}>
            その他のソフトウェア
          </Typography>
          <ul>
            <li>
              <NextLink href="/software/" passHref legacyBehavior>
                <MuiLink>
                ソフトウェア一覧
                </MuiLink>
              </NextLink>
            </li>
          </ul>
        </Container>
      </Box>
    </>
  )
}

export default ArchiveSoftwares
