import useBlogRecentPosts from '@/api/useBlogRecentPosts'
import useGitHubRecentRepos from '@/api/useGitHubRecentRepos'
import useLastfmApiMiddleware from '@/api/useLastfmApiMiddleware'
import useLiveinfoApiMiddlewareNicolive from '@/api/useLiveinfoApiMiddlewareNicolive'
import useLiveinfoApiMiddlewareYtlive from '@/api/useLiveinfoApiMiddlewareYtlive'
import LastfmApiMiddlewareCard from '@/components/LastfmApiMiddlewareCard'
import LiveinfoApiMiddlewareNicoliveCard from '@/components/LiveinfoApiMiddlewareNicoliveCard'
import LiveinfoApiMiddlewareYtliveCard from '@/components/LiveinfoApiMiddlewareYtliveCard'
import Navbar from '@/components/Navbar'
import { Box, CssBaseline, Grid, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material'
import MuiLink from '@mui/material/Link'
import Head from 'next/head'
import Image from 'next/image'
import NextLink  from 'next/link'

export default function Home() {
  const {
    repos,
  } = useGitHubRecentRepos()
  const {
    posts,
  } = useBlogRecentPosts()
  const {
    track,
  } = useLastfmApiMiddleware()
  const {
    program: nicoliveProgram,
  } = useLiveinfoApiMiddlewareNicolive()
  const {
    program: ytliveProgram,
  } = useLiveinfoApiMiddlewareYtlive()

  return (
    <>
      <Head>
        <title>aoirint</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <CssBaseline />
        <Navbar />
        <Box component="main" sx={{ px: 5, py: 3, width: '100%' }}>
          <Toolbar />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', py: 2 }}>
            <Image
              src="/images/icon.png"
              alt="Logo image"
              width="96"
              height="96"
            />
            <Box sx={{ px: 2.5, py: 2 }}>
              <Typography variant="h4">
                aoirint
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
              >
                技術とさぶかる
              </Typography>
            </Box>
          </Box>
          {track != null && track.isPlaying ? (
            <LastfmApiMiddlewareCard track={track} />
          ) : ''}
          {nicoliveProgram != null && nicoliveProgram.isOnair ? (
            <LiveinfoApiMiddlewareNicoliveCard program={nicoliveProgram} />
          ) : ''}
          {ytliveProgram != null && ytliveProgram.isOnair ? (
            <LiveinfoApiMiddlewareYtliveCard program={ytliveProgram} />
          ) : ''}
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={6}>
              <Typography variant="h5" gutterBottom>
                最近の記事
              </Typography>
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {posts.map((post) => (
                  <ListItem key={post.url} disablePadding>
                    <ListItemText
                      primary={
                        <NextLink href={post.url} passHref legacyBehavior>
                          <MuiLink>
                            {post.title}
                          </MuiLink>
                        </NextLink>
                      }
                      secondary={
                        <Typography variant="subtitle2" color="text.secondary">
                          {post.updatedAt != null ? (
                            <>
                              Updated: {post.updatedAt}
                            </>
                          ) : ''}
                          {post.createdAt != null && post.updatedAt != null ? ' (' : ''}
                          {post.createdAt != null ? (
                            <>
                              Created: {post.createdAt}
                            </>
                          ) : ''}
                          {post.createdAt != null && post.updatedAt != null ? ')' : ''}
                        </Typography>
                      }
                      />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" gutterBottom>
                最近のリポジトリ
              </Typography>
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {repos.map((repo) => (
                  <ListItem key={repo.url} disablePadding>
                    <ListItemText
                      primary={
                        <NextLink href={repo.url} passHref legacyBehavior>
                          <MuiLink>
                            {repo.title}
                          </MuiLink>
                        </NextLink>
                      }
                      secondary={
                        <Typography variant="subtitle2" color="text.secondary">
                          Pushed: {repo.pushedAt} (Created: {repo.createdAt})
                        </Typography>
                      }
                      />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
