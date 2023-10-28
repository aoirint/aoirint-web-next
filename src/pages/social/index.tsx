import Navbar from '@/components/Navbar'
import { Box, Container, CssBaseline, Table, TableBody, TableCell, TableHead, TableRow, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'
import NextLink  from 'next/link'
import MuiLink from '@mui/material/Link'
import * as React from 'react'

interface SocialLink {
  service: string
  identifier: string
  href: string
  isMe?: boolean
}

const socialLinks: SocialLink[] = [
  {
    service: "GitHub",
    identifier: "@aoirint",
    href: "https://github.com/aoirint",
    isMe: true,
  },
  {
    service: "Qiita",
    identifier: "@aoirint",
    href: "https://qiita.com/aoirint",
    isMe: true,
  },
  {
    service: "Twitter",
    identifier: "@aoirint",
    href: "https://twitter.com/aoirint",
    isMe: true,
  },
  {
    service: "Mastodon",
    identifier: "@aoirint@mstdn.aoirint.com",
    href: "https://mstdn.aoirint.com/@aoirint",
    isMe: true,
  },
  {
    service: "Misskey.io",
    identifier: "@aoirint@misskey.io",
    href: "https://misskey.io/@aoirint",
    isMe: true,
  },
  {
    service: "Bluesky",
    identifier: "aoirint.bsky.social",
    href: "https://bsky.app/profile/aoirint.bsky.social",
    isMe: true,
  },
  {
    service: "Threads",
    identifier: "@aoirint@threads.net",
    href: "https://www.threads.net/@aoirint",
    isMe: true,
  },
  {
    service: "Keybase",
    identifier: "@aoirint",
    href: "https://keybase.io/aoirint",
    isMe: true,
  },
  {
    service: "AtCoder",
    identifier: "@aoirint",
    href: "https://atcoder.jp/users/aoirint",
    isMe: true,
  },
  {
    service: "PyPI",
    identifier: "@aoirint",
    href: "https://pypi.org/user/aoirint/",
    isMe: true,
  },
  {
    service: "Docker Hub",
    identifier: "@aoirint",
    href: "https://hub.docker.com/u/aoirint",
    isMe: true,
  },
  {
    service: "pub.dev",
    identifier: "aoirint.com",
    href: "https://pub.dev/publishers/aoirint.com",
    isMe: true,
  },
  {
    service: "Zenn",
    identifier: "@aoirint",
    href: "https://zenn.dev/aoirint",
    isMe: true,
  },
]

const SocialPage: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>ソーシャル - aoirint</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <CssBaseline />
        <Navbar />
        <Container component="main" sx={{ p: 3, width: '100%' }}>
          <Toolbar />
          <Typography variant="h4">
            ソーシャル
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            ソーシャルアカウントなどの一覧
          </Typography>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell component="th">サービス</TableCell>
                <TableCell component="th">アカウント</TableCell>
              </TableRow>
            </TableHead>
          <TableBody>
            {socialLinks.map((socialLink) => (
              <TableRow key={socialLink.href}>
                <TableCell component="th">{socialLink.service}</TableCell>
                <TableCell>
                  <NextLink href={socialLink.href} passHref legacyBehavior>
                    <MuiLink rel={socialLink.isMe ? "me" : undefined}>
                      {socialLink.identifier}
                    </MuiLink>
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
