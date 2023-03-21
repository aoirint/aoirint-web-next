import useBlogRecentPosts from '@/api/useBlogRecentPosts'
import useGitHubRecentRepos from '@/api/useGitHubRecentRepos'
import LastfmApiMiddlewareCard from '@/components/LastfmApiMiddlewareCard'
import LiveinfoApiMiddlewareNicoliveCard from '@/components/LiveinfoApiMiddlewareNicoliveCard'
import LiveinfoApiMiddlewareYtliveCard from '@/components/LiveinfoApiMiddlewareYtliveCard'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const {
    repos,
  } = useGitHubRecentRepos()
  const {
    posts,
  } = useBlogRecentPosts()

  return (
    <>
      <Head>
        <title>aoirint.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <div className='columns is-vcentered is-mobile'>
            <div className='column is-narrow'>
              <Image
                src="/images/icon.png"
                alt="Logo image"
                className='image is-96x96'
                width="96"
                height="96"
              />
            </div>
            <div className='column'>
              <h1 className='title is-2'>
                aoirint
              </h1>
              <p className='subtitle is-6 pt-1'>
                技術とさぶかる
              </p>
            </div>
          </div>
          <div className='columns'>
            <div className='column my-2'>
              <h2 className='title is-4'>
                ステータス
              </h2>
              <LastfmApiMiddlewareCard />
              <LiveinfoApiMiddlewareNicoliveCard />
              <LiveinfoApiMiddlewareYtliveCard />

              {/* <h2 className='title is-4'>
                興味関心
              </h2>
              <ul>
                {interests.map((interest, index) => (
                  <li key={index} className='mb-2'>
                    <a href={interest.url}>
                      <div style={{ backgroundImage: interest.backgroundImage, backgroundColor: interest.backgroundColor, borderRadius: '8px' }}>
                        <div className="is-flex is-justify-content-right is-align-items-end" style={{ backgroundColor: interest.shadowColor, borderRadius: '8px', height: '100px' }}>
                          <div className="px-3 py-2 is-size-4 has-text-weight-bold" style={{ color: '#FFF' }}>
                            {interest.title}
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul> */}
            </div>
            {/* <div className='column'>
                  <h2 className='title is-4'>
                    Activity
                  </h2>
                  <ul>
                    {activities.map((activity) => (
                      <li className='mb-2'>
                        <a href={activity.url} target='_blank' className='mb-2'>
                          {activity.title}
                        </a>
                        <div className='is-size-7'>
                        {activity.category}, {activity.date}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div> */}
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
      </section>
    </>
  )
}
