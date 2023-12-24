
import {
  Grid,
  Box,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  List,
  ListItem,
} from '@mui/material'
import MuiLink from '@mui/material/Link'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import * as React from 'react'
import Navbar from '@/components/Navbar'

const ProfilePage: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>プロフィール - aoirint</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <CssBaseline />
        <Navbar />
        <Container component='main' sx={{ m: 4, width: '100%' }}>
          <Toolbar />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', py: 2 }}>
            <Image src='/images/icon.png' alt='Logo image' width='96' height='96' />
            <Box sx={{ px: 2.5, py: 2 }}>
              <Typography variant='h4' component='h2'>
                aoirint
              </Typography>
              <Typography variant='subtitle1' color='text.secondary'>
                技術とさぶかる
              </Typography>
            </Box>
          </Box>
          <Grid container spacing={4} sx={{ my: 0 }}>
            <Grid item xs={12} lg={4}>
              <Typography variant='h5' component='h3'>
                連絡先・SNS
              </Typography>
              <Table size='medium' sx={{ my: 2 }}>
                <TableBody>
                  <TableRow>
                    <TableCell component='th'>
                      <Typography variant='body1'>Twitter</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='body1'>
                        <NextLink href='https://twitter.com/aoirint' passHref legacyBehavior>
                          <MuiLink rel='me'>@aoirint</MuiLink>
                        </NextLink>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component='th'>
                      <Typography variant='body1'>Mastodon</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='body1'>
                        <NextLink href='https://mstdn.aoirint.com/@aoirint' passHref legacyBehavior>
                          <MuiLink rel='me'>@aoirint@mstdn.aoirint.com</MuiLink>
                        </NextLink>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component='th'>
                      <Typography variant='body1'>GitHub</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='body1'>
                        <NextLink href='https://github.com/aoirint' passHref legacyBehavior>
                          <MuiLink rel='me'>@aoirint</MuiLink>
                        </NextLink>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component='th'>
                      <Typography variant='body1'>Email</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='body1'>
                        <NextLink href='mailto:aoirint@gmail.com' passHref legacyBehavior>
                          <MuiLink rel='me'>aoirint@gmail.com</MuiLink>
                        </NextLink>
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Typography variant='h5' component='h3' gutterBottom>
                自己紹介
              </Typography>
              <Typography variant='body1'>
                WebプログラミングやLinuxサーバ運用を中心とするソフトウェア開発者です。
                使用するプログラミング言語・技術はPython、TypeScript、Git、Dockerなど。
                たまに電子工作や3Dプリンタを使ったものづくりもしています。 ずんだもん
                などの音声合成キャラクターが好きで、フリーの音声合成ソフトウェア VOICEVOX
                のOSS開発に協力しています。
              </Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography variant='h5' component='h3' gutterBottom>
                OSSコントリビューション
              </Typography>
              <Box sx={{ my: 2 }}>
                <Typography variant='h6' component='h4'>
                  音声合成ソフトウェア VOICEVOX
                </Typography>
                <Typography variant='subtitle1' component='h5' gutterBottom>
                  <NextLink href='https://github.com/VOICEVOX' passHref legacyBehavior>
                    <MuiLink>https://github.com/VOICEVOX</MuiLink>
                  </NextLink>
                </Typography>
                <Typography variant='body1'>
                  <List sx={{ listStyleType: 'disc', listStylePosition: 'outside', ml: '1.25rem' }}>
                    <ListItem disablePadding sx={{ display: 'list-item' }}>
                      レビュワー（2021年12月～）
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'list-item' }}>
                      自動ビルド（GitHub Actions）、Linux x64バイナリ対応、Docker対応、Linux
                      armhfバイナリ対応ほか
                    </ListItem>
                  </List>
                </Typography>
              </Box>
              <Box sx={{ my: 2 }}>
                <Typography variant='h6' component='h4'>
                  静的サイトジェネレータ miyadaiku
                </Typography>
                <Typography variant='subtitle1' component='h5' gutterBottom>
                  <NextLink href='https://github.com/miyadaiku/miyadaiku' passHref legacyBehavior>
                    <MuiLink>https://github.com/miyadaiku/miyadaiku</MuiLink>
                  </NextLink>
                </Typography>
                <Typography variant='body1'>
                  <List sx={{ listStyleType: 'disc', listStylePosition: 'outside', ml: '1.25rem' }}>
                    <ListItem disablePadding sx={{ display: 'list-item' }}>
                      機能追加、バグ修正
                    </ListItem>
                  </List>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography variant='h5' component='h3' gutterBottom>
                受賞等
              </Typography>
              <Typography variant='body1'>
                <List sx={{ listStyleType: 'disc', listStylePosition: 'outside', ml: '1.25rem' }}>
                  <ListItem disablePadding sx={{ display: 'list-item' }}>
                    技育祭 ウインターハッカソンvol7 最優秀賞 「Spatial Volume Control
                    App」（2021年2月）
                  </ListItem>
                  <ListItem disablePadding sx={{ display: 'list-item' }}>
                    電気通信大学 2019年度 学生表彰（課外活動）（2020年3月）
                  </ListItem>
                  <ListItem disablePadding sx={{ display: 'list-item' }}>
                    東京ゲームショウ2019 センス・オブ・ワンダーナイト BEST Technological Game Award
                    「UPLIGHT」（2019年9月）
                  </ListItem>
                </List>
              </Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography variant='h5' component='h3' gutterBottom>
                論文・研究報告
              </Typography>
              <List sx={{ listStyleType: 'disc', listStylePosition: 'outside', ml: '1.25rem' }}>
                <ListItem disablePadding sx={{ display: 'list-item' }}>
                  （第二著者）
                  <a href='https://doi.org/10.1145/3474349.3480207'>
                    UPLIGHT: A Novel Portable Game Device with Omnidirectional Projection Display
                  </a>
                  , UIST 2021（2021年10月）
                </ListItem>
                <ListItem disablePadding sx={{ display: 'list-item' }}>
                  （第二著者）
                  <a href='https://id.ndl.go.jp/bib/031336480'>
                    UPLIGHT：小型全周囲ディスプレイを搭載した次世代の携帯型ゲームデバイスの開発
                  </a>
                  , 情報処理学会 第188回HCI研究会（2020年6月）
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography variant='h5' component='h3' gutterBottom>
                作品展示
              </Typography>
              <Typography variant='h6' component='h4' gutterBottom>
                UPLIGHT
              </Typography>
              <List sx={{ listStyleType: 'disc', listStylePosition: 'outside', ml: '1.25rem' }}>
                <ListItem disablePadding sx={{ display: 'list-item' }}>
                  トリエ京王調布 こもれびテラス デモ展示（2020年12月）
                </ListItem>
                <ListItem disablePadding sx={{ display: 'list-item' }}>
                  京王あそびの森 HUGHUG デモ展示（2020年9月）
                </ListItem>
                <ListItem disablePadding sx={{ display: 'list-item' }}>
                  GDG DevFest Tokyo 2019 学生展示ブース デモ展示（2019年12月）
                </ListItem>
                <ListItem disablePadding sx={{ display: 'list-item' }}>
                  GUGEN2019 デモ展示（2019年12月）
                </ListItem>
                <ListItem disablePadding sx={{ display: 'list-item' }}>
                  東京ゲームショウ2019 インディーゲームコーナー選考ブース デモ展示（2019年9月）
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default ProfilePage
