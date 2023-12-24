import Navbar from '@/components/Navbar'
import { Box, Container, CssBaseline, Divider, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'
import NextLink  from 'next/link'
import MuiLink from '@mui/material/Link'
import * as React from 'react'

interface MiscLink {
  text: string
  href: string
}

const miscLinks: MiscLink[] = [
  {
    text: "GitHub上の活動を検索",
    href: "https://github.com/pulls?q=involves%3Aaoirint+-user%3Aaoirint+sort%3Aupdated-desc",
  },
  {
    text: "おしらせ",
    href: "/info/",
  },
  {
    text: "サービス",
    href: "/service/",
  },
  {
    text: "作品ギャラリー",
    href: "/activity/",
  },
  {
    text: "プロフィール",
    href: "/profile/",
  },
  {
    text: "リンク集",
    href: "/links/",
  },
]

const MiscPage: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>その他 - aoirint</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <CssBaseline />
        <Navbar />
        <Container component="main" sx={{ m: 4, width: '100%' }}>
          <Toolbar />
          <Typography variant="h4">
            その他
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            その他のコンテンツ
          </Typography>
          <ul>
            {miscLinks.map((miscLink) => (
              <li key={miscLink.href}>
                <NextLink
                  href={miscLink.href}
                  passHref
                  legacyBehavior
                >
                  <MuiLink>
                    <Typography component="span" lineHeight={2}>
                      {miscLink.text}
                    </Typography>
                  </MuiLink>
                </NextLink>
              </li>
            ))}
          </ul>
          <Divider />
          <ul>
            <li>
              <NextLink
                href="https://status.aoirint.com"
                passHref
                legacyBehavior
              >
                <MuiLink>
                  <Typography component="span" lineHeight={2}>
                    サービスの稼働状況
                  </Typography>
                </MuiLink>
              </NextLink>
            </li>
            <li>
              <NextLink
                href="/minecraft/"
                passHref
                legacyBehavior
              >
                <MuiLink>
                  <Typography component="span" lineHeight={2}>
                    Minecraftサーバーの稼働状況
                  </Typography>
                </MuiLink>
              </NextLink>
            </li>
          </ul>
          <Divider />
          <ul>
            <li>
              <NextLink
                href="https://scrapbox.io/aoirint/"
                passHref
                legacyBehavior
              >
                <MuiLink>
                  <Typography component="span" lineHeight={2}>
                    Scrapbox
                  </Typography>
                </MuiLink>
              </NextLink>
            </li>
            <li>
              <NextLink
                href="https://wiki.aoirint.com/"
                passHref
                legacyBehavior
              >
                <MuiLink>
                  <Typography component="span" lineHeight={2}>
                    Wiki
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

export default MiscPage
