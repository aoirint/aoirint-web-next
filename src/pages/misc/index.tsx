import { Box, Container, CssBaseline, Divider, Toolbar, Typography } from '@mui/material'
import MuiLink from '@mui/material/Link'
import Head from 'next/head'
import NextLink from 'next/link'
import * as React from 'react'
import Navbar from '@/components/Navbar'
import { miscExternalLinks, miscInternalLinks, miscStatusLinks } from '@/models/misc_links'

const MiscPage: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>その他 - aoirint</title>
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
          <Typography variant='h4'>その他</Typography>
          <Typography variant='subtitle1' color='text.secondary' gutterBottom>
            その他のコンテンツ
          </Typography>
          <ul>
            {miscInternalLinks.map((miscLink) => (
              <li key={miscLink.href}>
                <NextLink href={miscLink.href} passHref legacyBehavior>
                  <MuiLink>
                    <Typography component='span' lineHeight={2}>
                      {miscLink.text}
                    </Typography>
                  </MuiLink>
                </NextLink>
              </li>
            ))}
          </ul>
          <Divider />
          <ul>
            {miscStatusLinks.map((miscLink) => (
              <li key={miscLink.href}>
                <NextLink href={miscLink.href} passHref legacyBehavior>
                  <MuiLink>
                    <Typography component='span' lineHeight={2}>
                      {miscLink.text}
                    </Typography>
                  </MuiLink>
                </NextLink>
              </li>
            ))}
          </ul>
          <Divider />
          <ul>
            {miscExternalLinks.map((miscLink) => (
              <li key={miscLink.href}>
                <NextLink href={miscLink.href} passHref legacyBehavior>
                  <MuiLink>
                    <Typography component='span' lineHeight={2}>
                      {miscLink.text}
                    </Typography>
                  </MuiLink>
                </NextLink>
              </li>
            ))}
          </ul>
        </Container>
      </Box>
    </>
  )
}

export default MiscPage
