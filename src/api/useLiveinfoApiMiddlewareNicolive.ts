import React from 'react'

interface LiveinfoApiMiddlewareV1NicoliveResponse {
  program: {
    id: string
    title: string
    description: string
    url: string
    thumbnails: string[]
    startTime: string
    endTime: string
    isOnair: boolean
  }
  community: {
    name: string
    url: string
    iconUrl: string
  }
  user: {
    name: string
    url: string
    iconUrl: string
  }
}

export interface NicoliveProgram {
  isOnair: boolean
  programTitle: string | null
  programUrl: string | null
  thumbnailUrl: string | null
  communityName: string | null
  communityUrl: string | null
  userName: string | null
  userUrl: string | null
}

const useLiveinfoApiMiddlewareNicolive = () => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [program, setProgram] = React.useState<NicoliveProgram | null>(null)

  React.useEffect(() => {
    if (loading) {
      fetch('https://liveinfo-api-middleware.aoirint.com/v1/nicolive')
        .then((data) => data.json())
        .then((data: LiveinfoApiMiddlewareV1NicoliveResponse) => {
          const program = data?.program
          const isOnair = program?.isOnair
          const community = data?.community
          const user = data?.user

          setProgram({
            isOnair: isOnair ?? false,
            programTitle: program?.title ?? null,
            programUrl: program?.url ?? null,
            thumbnailUrl: program?.thumbnails?.[0] ?? null,
            communityName: community?.name ?? null,
            communityUrl: community?.url ?? null,
            userName: user?.name ?? null,
            userUrl: user?.url ?? null,
          })
          setLoading(false)
        })
        .catch((error: unknown) => {
          console.error(error)
        })
    }
  }, [loading, program])

  return {
    loading,
    program,
  }
}

export default useLiveinfoApiMiddlewareNicolive
