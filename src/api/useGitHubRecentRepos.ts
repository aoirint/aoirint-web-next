import dayjs from 'dayjs'
import React from 'react'

export interface Repo {
  title: string
  url: string
  createdAt: string
  updatedAt: string
  pushedAt: string
}

const useGitHubRecentRepos = () => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [repos, setRepos] = React.useState<Repo[]>([])

  React.useEffect(() => {
    if (loading) {
      fetch('https://api.github.com/users/aoirint/repos?sort=pushed&per_page=10')
        .then((data) => data.json())
        .then((data) => {
          const repos = data.map((repo: any): Repo => {
            const title = repo.full_name
            const url = repo.html_url

            const createdAt = dayjs(repo.created_at).format('YYYY-MM-DD')
            const updatedAt = dayjs(repo.updated_at).format('YYYY-MM-DD')
            const pushedAt = dayjs(repo.pushed_at).format('YYYY-MM-DD')

            return {
              title,
              url,
              createdAt,
              updatedAt,
              pushedAt,
            }
          })

          setRepos(repos)
          setLoading(false)
        })
        .catch((error: unknown) => {
          console.error(error)
        })
    }
  })

  return {
    loading,
    repos,
  }
}

export default useGitHubRecentRepos
