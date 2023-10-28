import useBlogRecentPosts from '@/api/useBlogRecentPosts'
import useGitHubRecentRepos from '@/api/useGitHubRecentRepos'
import useLastfmApiMiddleware from '@/api/useLastfmApiMiddleware'
import useLiveinfoApiMiddlewareNicolive from '@/api/useLiveinfoApiMiddlewareNicolive'
import useLiveinfoApiMiddlewareYtlive from '@/api/useLiveinfoApiMiddlewareYtlive'
import LastfmApiMiddlewareCard from '@/components/LastfmApiMiddlewareCard'
import LastfmApiMiddlewareCardMock from '@/components/LastfmApiMiddlewareCardMock'
import LiveinfoApiMiddlewareNicoliveCard from '@/components/LiveinfoApiMiddlewareNicoliveCard'
import LiveinfoApiMiddlewareYtliveCard from '@/components/LiveinfoApiMiddlewareYtliveCard'
import Navbar from '@/components/Navbar'
import { Box, CssBaseline, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'

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
        <Box component="main" sx={{ p: 3, width: '100%' }}>
          <Toolbar />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', py: 2 }}>
            <Image
              src="/images/icon.png"
              alt="Logo image"
              width="96"
              height="96"
            />
            <Box sx={{ p: 2 }}>
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
          <div className='container'>
            {track != null && track.isPlaying ? (
              <LastfmApiMiddlewareCard track={track} />
            ) : ''}
            {nicoliveProgram != null && nicoliveProgram.isOnair ? (
              <LiveinfoApiMiddlewareNicoliveCard program={nicoliveProgram} />
            ) : ''}
            {ytliveProgram != null && ytliveProgram.isOnair ? (
              <LiveinfoApiMiddlewareYtliveCard program={ytliveProgram} />
            ) : ''}
            <div className='columns'>
              <div className='column my-2'>
                <h2 className='title is-4'>
                  最近の記事
                </h2>
                <ul>
                  {posts.map((post) => (
                    <li className='mb-2' key={post.url}>
                      <a href={post.url} className='mb-2'>
                        {post.title}
                      </a>
                      <div className='is-size-7'>
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
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='column my-2'>
                <h2 className='title is-4'>
                  最近のリポジトリ
                </h2>
                <ul>
                  {repos.map((repo) => (
                    <li className='mb-2' key={repo.url}>
                      <a href={repo.url} className='mb-2'>
                        {repo.title}
                      </a>
                      <div className='is-size-7'>
                        Pushed: {repo.pushedAt} (Created: {repo.createdAt})
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  )
}
