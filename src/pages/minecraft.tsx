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
  TableHead,
} from '@mui/material'

import dayjs from 'dayjs'
import Head from 'next/head'
import * as React from 'react'
import useMinecraftBedrockServerStatusList from '@/api/useMinecraftBedrockServerStatusList'
import useMinecraftJavaServerStatusList from '@/api/useMinecraftJavaServerStatusList'
import Navbar from '@/components/Navbar'

const MinecraftPage: React.FC<{}> = () => {
  const { loading: bedrockServerStatusListLoading, bedrockServerStatusList } =
    useMinecraftBedrockServerStatusList()
  const { loading: javaServerStatusListLoading, javaServerStatusList } =
    useMinecraftJavaServerStatusList()

  return (
    <>
      <Head>
        <title>Minecraft Servers - aoirint</title>
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
          <Typography variant='h4'>Minecraftサーバーの稼働状況</Typography>
          <Typography variant='subtitle1' color='text.secondary' gutterBottom>
            このページは試験的なものです
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            現在、すべてのサーバーはホワイトリスト制であり、プライベートです。
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <Typography variant='h5'>統合版</Typography>
              {bedrockServerStatusListLoading ? (
                <p>読み込み中</p>
              ) : (
                <Table size='medium'>
                  <TableHead>
                    <TableRow>
                      <TableCell>サーバー名</TableCell>
                      <TableCell>アドレス</TableCell>
                      <TableCell>稼働状態</TableCell>
                      <TableCell>確認時刻</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {bedrockServerStatusList?.map((bedrockServerStatus) => (
                      <TableRow key={bedrockServerStatus.id}>
                        <TableCell>{bedrockServerStatus.name}</TableCell>
                        <TableCell>
                          <code>{`${bedrockServerStatus.host}:${bedrockServerStatus.port}`}</code>
                        </TableCell>
                        <TableCell>
                          {bedrockServerStatus.ok ? (
                            <span className='tag is-success is-medium'>稼働中</span>
                          ) : (
                            <span className='tag is-danger is-medium'>停止中</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {dayjs(bedrockServerStatus.timestamp).format('YYYY-MM-DDTHH:mm:ssZ')}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h5'>Java版</Typography>
              {javaServerStatusListLoading ? (
                <p>読み込み中</p>
              ) : (
                <Table size='medium'>
                  <TableHead>
                    <TableRow>
                      <TableCell>サーバー名</TableCell>
                      <TableCell>アドレス</TableCell>
                      <TableCell>稼働状態</TableCell>
                      <TableCell>確認時刻</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {javaServerStatusList?.map((javaServerStatus) => (
                      <TableRow key={javaServerStatus.id}>
                        <TableCell>{javaServerStatus.name}</TableCell>
                        <TableCell>
                          <code>{`${javaServerStatus.host}:${javaServerStatus.port}`}</code>
                        </TableCell>
                        <TableCell>
                          {javaServerStatus.ok ? (
                            <span className='tag is-success is-medium'>稼働中</span>
                          ) : (
                            <span className='tag is-danger is-medium'>停止中</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {dayjs(javaServerStatus.timestamp).format('YYYY-MM-DDTHH:mm:ssZ')}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Grid>
          </Grid>
          <Typography variant='body2' color='text.secondary' sx={{ mt: 4 }}>
            Powered by{' '}
            <a href='https://github.com/aoirint/aoirint_mcping_server'>aoirint_mcping_server</a> +{' '}
            <a href='https://github.com/aoirint/aoirint_mcping_bff'>aoirint_mcping_bff</a>.
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default MinecraftPage
