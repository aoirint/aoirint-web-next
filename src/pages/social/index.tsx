import {
  Box,
  Container,
  CssBaseline,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from '@mui/material'
import MuiLink from '@mui/material/Link'
import Head from 'next/head'
import NextLink from 'next/link'
import * as React from 'react'
import Navbar from '@/components/Navbar'
import { socialAccounts } from '@/models/social_accounts'

const SocialPage: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>ソーシャル - aoirint</title>
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
          <Typography variant='h4'>ソーシャル</Typography>
          <Typography variant='subtitle1' color='text.secondary' gutterBottom>
            ソーシャルアカウントなどの一覧
          </Typography>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell component='th'>サービス</TableCell>
                <TableCell component='th'>アカウント</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {socialAccounts.map((socialAccount) => (
                <TableRow key={socialAccount.href}>
                  <TableCell component='th'>{socialAccount.service}</TableCell>
                  <TableCell>
                    <NextLink href={socialAccount.href} passHref legacyBehavior>
                      <MuiLink rel='me'>{socialAccount.identifier}</MuiLink>
                    </NextLink>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Container>
      </Box>
    </>
  )
}

export default SocialPage
