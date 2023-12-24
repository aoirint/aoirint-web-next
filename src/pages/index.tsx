import Head from 'next/head'
import Image from 'next/image'
import useBlogRecentPosts from '@/api/useBlogRecentPosts'
import useGitHubRecentRepos from '@/api/useGitHubRecentRepos'
import useLastfmApiMiddleware from '@/api/useLastfmApiMiddleware'
import useLiveinfoApiMiddlewareNicolive from '@/api/useLiveinfoApiMiddlewareNicolive'
import useLiveinfoApiMiddlewareYtlive from '@/api/useLiveinfoApiMiddlewareYtlive'
import LastfmApiMiddlewareCard from '@/components/LastfmApiMiddlewareCard'
import LiveinfoApiMiddlewareNicoliveCard from '@/components/LiveinfoApiMiddlewareNicoliveCard'
import LiveinfoApiMiddlewareYtliveCard from '@/components/LiveinfoApiMiddlewareYtliveCard'
import Navbar from '@/components/Navbar'

export default function Home() {
  const { repos } = useGitHubRecentRepos()
  const { posts } = useBlogRecentPosts()
  const { track } = useLastfmApiMiddleware()
  const { program: nicoliveProgram } = useLiveinfoApiMiddlewareNicolive()
  const { program: ytliveProgram } = useLiveinfoApiMiddlewareYtlive()

  return (
    <>
      <Head>
        <title>aoirint</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <div className='columns is-vcentered is-mobile'>
            <div className='column is-narrow'>
              <Image
                src='/images/icon.png'
                alt='Logo image'
                className='image is-96x96'
                width='96'
                height='96'
              />
            </div>
            <div className='column'>
              <h1 className='title is-2'>aoirint</h1>
              <p className='subtitle is-6 pt-1'>技術とさぶかる</p>
            </div>
          </div>
          {track != null && track.isPlaying ? <LastfmApiMiddlewareCard track={track} /> : ''}
          {nicoliveProgram != null && nicoliveProgram.isOnair ? (
            <LiveinfoApiMiddlewareNicoliveCard program={nicoliveProgram} />
          ) : (
            ''
          )}
          {ytliveProgram != null && ytliveProgram.isOnair ? (
            <LiveinfoApiMiddlewareYtliveCard program={ytliveProgram} />
          ) : (
            ''
          )}
          <div className='columns'>
            <div className='column my-2'>
              <h2 className='title is-4'>最近の記事</h2>
              <ul>
                {posts.map((post) => (
                  <li className='mb-2' key={post.url}>
                    <a href={post.url} className='mb-2'>
                      {post.title}
                    </a>
                    <div className='is-size-7'>
                      {post.updatedAt != null ? <>Updated: {post.updatedAt}</> : ''}
                      {post.createdAt != null && post.updatedAt != null ? ' (' : ''}
                      {post.createdAt != null ? <>Created: {post.createdAt}</> : ''}
                      {post.createdAt != null && post.updatedAt != null ? ')' : ''}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className='column my-2'>
              <h2 className='title is-4'>最近のリポジトリ</h2>
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
      </section>
    </>
  )
}
