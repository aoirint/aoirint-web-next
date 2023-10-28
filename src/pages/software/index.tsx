import Navbar from '@/components/Navbar'
import SoftwareCardList, { SoftwareCard } from '@/components/SoftwareCardList'
import { Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'
import MuiLink from '@mui/material/Link'
import NextLink  from 'next/link'
import React from 'react'

const softwareCards: SoftwareCard[] = [
  {
    title: 'Syosetu Yomi Copy Extension',
    description: '小説家になろうの小説ページを、音声合成ソフトによる読み上げ用に整形してクリップボードにコピーするためのChrome拡張機能',
    image: '/software/images/syosetu-yomicopy-extension.png',
    imageAlt: 'Syosetu Yomi Copy Extension Icon',
    useUrl: 'https://chrome.google.com/webstore/detail/jkncjdlhbkikihjcokpbgijggimlmmoc',
    archiveUrl: null,
    sourceCodeUrl: 'https://github.com/aoirint/syosetu-yomicopy-extension',
    detailUrl: null,
    sourceProjectUrl: null,
  },
  {
    title: 'TweetDeck VOICEVOX Extension',
    description: 'TweetDeckのカラムに流れるツイートをVOICEVOXに読み上げさせるChrome拡張機能',
    image: '/software/images/tweetdeck_voicevox_extension.png',
    imageAlt: 'TweetDeck VOICEVOX Extension Icon',
    useUrl: 'https://chrome.google.com/webstore/detail/cekkbogfkgichpacgbdddchpahpkmldl',
    archiveUrl: null,
    sourceCodeUrl: 'https://github.com/aoirint/tweetdeck_voicevox_extension',
    detailUrl: null,
    sourceProjectUrl: null,
  },
  {
    title: 'MATV Tool',
    description: 'マルチオーディオトラック動画ファイルの簡易編集コマンドラインツール',
    image: '/software/images/blank.png',
    imageAlt: 'Blank Image',
    useUrl: 'https://github.com/aoirint/matvtoolpy#%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB',
    archiveUrl: null,
    sourceCodeUrl: 'https://github.com/aoirint/matvtoolpy',
    detailUrl: null,
    sourceProjectUrl: null,
  },
  {
    title: 'PSDLayer2Dir',
    description: 'PSDファイルのレイヤー構造＋画像をディレクトリ構造＋PNGとしてダンプするコマンドラインツール',
    image: '/software/images/blank.png',
    imageAlt: 'Blank Image',
    useUrl: 'https://github.com/aoirint/psdlayer2dirpy#usage',
    archiveUrl: null,
    sourceCodeUrl: 'https://github.com/aoirint/psdlayer2dirpy',
    detailUrl: null,
    sourceProjectUrl: null,
  },
  {
    title: 'Among Us Range',
    description: 'Among Usのレンジ設定のスクリーンショット集',
    image: '/software/images/blank.png',
    imageAlt: 'Blank Image',
    useUrl: 'https://aoirint.github.io/among_us_range/',
    archiveUrl: null,
    sourceCodeUrl: 'https://github.com/aoirint/among_us_range',
    detailUrl: null,
    sourceProjectUrl: null,
  },
]

const libraryCards: SoftwareCard[] = [
  {
    title: 'jmapy',
    description: '気象庁天気予報データの非公式Pythonラッパー',
    image: '/software/images/blank.png',
    imageAlt: 'Blank Image',
    useUrl: 'https://github.com/aoirint/aoirint_jmapy#install',
    archiveUrl: null,
    sourceCodeUrl: 'https://github.com/aoirint/aoirint_jmapy',
    detailUrl: null,
    sourceProjectUrl: null,
  },
  {
    title: 'id3py',
    description: 'ID3タグ（MP3ファイルのメタデータ）を読み取るPythonライブラリ',
    image: '/software/images/blank.png',
    imageAlt: 'Blank Image',
    useUrl: 'https://github.com/aoirint/id3py#install',
    archiveUrl: null,
    sourceCodeUrl: 'https://github.com/aoirint/id3py',
    detailUrl: null,
    sourceProjectUrl: null,
  },
]

const dockerImageCards: SoftwareCard[] = [
  {
    title: 'Stable Diffusion WebUI',
    description: 'Stable Diffusion系の画像生成モデルをブラウザから操作するUI（WebUI）',
    image: '/software/images/blank.png',
    imageAlt: 'Blank Image',
    useUrl: 'https://hub.docker.com/r/aoirint/sd_webui',
    archiveUrl: null,
    sourceCodeUrl: 'https://github.com/aoirint/stable-diffusion-webui-docker',
    detailUrl: null,
    sourceProjectUrl: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui',
  },
  {
    title: 'sd-scripts',
    description: 'Stable Diffusion系の画像生成モデルのFine tuningやLoRAを訓練するスクリプト',
    image: '/software/images/blank.png',
    imageAlt: 'Blank Image',
    useUrl: 'https://hub.docker.com/r/aoirint/sd_scripts',
    archiveUrl: null,
    sourceCodeUrl: 'https://github.com/aoirint/sd-scripts-docker',
    detailUrl: null,
    sourceProjectUrl: 'https://github.com/kohya-ss/sd-scripts',
  },
]

const Softwares: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>ソフトウェア - aoirint</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <CssBaseline />
        <Navbar />
        <Container component="main" sx={{ p: 3, width: '100%' }}>
          <Toolbar />
          <Typography variant="h4">
            ソフトウェア
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            WebアプリやChrome拡張機能、生産性向上ツールを開発しています
          </Typography>
          <SoftwareCardList cards={softwareCards} />
          <Typography variant="h5" sx={{ mt: 3 }}>
            開発者向けライブラリ
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            開発者向けのライブラリ・パッケージを開発しています
          </Typography>
          <SoftwareCardList cards={libraryCards} />
          <Typography variant="h5" sx={{ mt: 3 }}>
            Dockerイメージ
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            OSSソフトウェアをDockerイメージ化しています
          </Typography>
          <SoftwareCardList cards={dockerImageCards} />
          <Typography variant="h5" sx={{ mt: 3 }}>
            その他のソフトウェア
          </Typography>
            <ul>
              <li>
                <NextLink href="/software/early/" passHref legacyBehavior>
                  <MuiLink>
                  開発早期のソフトウェア
                  </MuiLink>
                </NextLink>
              </li>
              <li>
                <NextLink href="/software/archive/" passHref legacyBehavior>
                  <MuiLink>
                  メンテナンスを終了したソフトウェア
                  </MuiLink>
                </NextLink>
              </li>
            </ul>
        </Container>
      </Box>
    </>
  )
}

export default Softwares
