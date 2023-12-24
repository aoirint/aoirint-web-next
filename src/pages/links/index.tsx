import Navbar from '@/components/Navbar'
import { Grid, Box, Container, CssBaseline, Toolbar, Typography, Table, TableBody, TableRow, TableCell, TableHead } from '@mui/material'
import MuiLink from '@mui/material/Link'
import NextLink  from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react'

const LinksPage: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>リンク集 - aoirint</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <CssBaseline />
        <Navbar />
        <Container component="main" sx={{ m: 4, width: '100%' }}>
          <Toolbar />
          <Typography variant="h4">
            リンク集
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            勝手にリンク集です
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            リンクの追加・変更・削除などは、
            <a href="https://github.com/aoirint/aoirint-web-next/issues">Issues</a>、
            <a href="https://github.com/aoirint/aoirint-web-next/pulls">Pull requests</a>、
            その他連絡先までお願いします。
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                個人サイト
              </Typography>
              <Table size="medium">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      リンク
                    </TableCell>
                    <TableCell>
                      管理人
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <NextLink href='https://www.yude.jp/'>
                        <Image
                          src='/links/images/yude_jp.png'
                          alt='yude.jpのバナー画像'
                          title='yude.jp'
                          width="234"
                          height="60"
                        />
                      </NextLink>
                    </TableCell>
                    <TableCell>
                      yude さん
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <NextLink href='https://pickledchair.com/' passHref legacyBehavior>
                        <MuiLink>
                          SuitCase&apos;s Site
                        </MuiLink>
                      </NextLink>
                    </TableCell>
                    <TableCell>
                      SuitCase さん
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                ソフトウェア
              </Typography>
              <Table size="medium">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      ジャンル
                    </TableCell>
                    <TableCell>
                      リンク
                    </TableCell>
                    <TableCell>
                      管理人
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      音声合成ソフトウェア
                    </TableCell>
                    <TableCell>
                      <NextLink href='https://voicevox.hiroshiba.jp/' passHref legacyBehavior>
                        <MuiLink>
                          VOICEVOX
                        </MuiLink>
                      </NextLink>
                    </TableCell>
                    <TableCell>
                      VOICEVOX Organization
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      プログラミング言語
                    </TableCell>
                    <TableCell>
                      <NextLink href='https://www.python.org/' passHref legacyBehavior>
                        <MuiLink>
                          Python
                        </MuiLink>
                      </NextLink>
                    </TableCell>
                    <TableCell>
                      Python Software Foundation
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      JavaScript 環境
                    </TableCell>
                    <TableCell>
                      <NextLink href='https://nodejs.org/' passHref legacyBehavior>
                        <MuiLink>
                          Node.js
                        </MuiLink>
                      </NextLink>
                    </TableCell>
                    <TableCell>
                      OpenJS Foundation
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Webフレームワーク
                    </TableCell>
                    <TableCell>
                      <NextLink href='https://www.gatsbyjs.com/' passHref legacyBehavior>
                        <MuiLink>
                          Gatsby
                        </MuiLink>
                      </NextLink>
                    </TableCell>
                    <TableCell>
                      Gatsby, Inc.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      GPGPU
                    </TableCell>
                    <TableCell>
                      <NextLink href='https://developer.nvidia.com/' passHref legacyBehavior>
                        <MuiLink>
                          NVIDIA Developer
                        </MuiLink>
                      </NextLink>
                    </TableCell>
                    <TableCell>
                      NVIDIA Corporation
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      GPGPU
                    </TableCell>
                    <TableCell>
                      <NextLink href='https://pytorch.org/' passHref legacyBehavior>
                        <MuiLink>
                        PyTorch
                        </MuiLink>
                      </NextLink>
                    </TableCell>
                    <TableCell>
                      PyTorch Foundation
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                キャラクター
              </Typography>
              <Table size="medium">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      リンク
                    </TableCell>
                    <TableCell>
                      管理人
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <NextLink href='https://zunko.jp/' passHref legacyBehavior>
                        <MuiLink>
                          東北ずん子 公式HP
                        </MuiLink>
                      </NextLink>
                    </TableCell>
                    <TableCell>
                      SSS LLC
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <NextLink href='https://www.gynoid.co.jp/' passHref legacyBehavior>
                        <MuiLink>
                          ガイノイド オフィシャルサイト
                        </MuiLink>
                      </NextLink>
                    </TableCell>
                    <TableCell>
                      Gynoid
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default LinksPage
