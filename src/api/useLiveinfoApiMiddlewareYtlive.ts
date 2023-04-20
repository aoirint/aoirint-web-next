import React from 'react'

interface LiveinfoApiMiddlewareV1YtliveResponse {
  program: {
    id: string
    title: string
    description: string
    url: string
    thumbnails: Record<string, {
      url: string
      width: number
      height: number
    }>
    startTime: string
    endTime: string
    isOnair: boolean
  }
  channel: {
    name: string
    url: string
    thumbnails: Record<string, {
      url: string
      width: number
      height: number
    }>
  }
}

export interface YtliveProgram {
  isOnair: boolean
  programTitle: string | null
  programUrl: string | null
  thumbnailUrl: string | null
  channelName: string | null
  channelUrl: string | null
}

const useLiveinfoApiMiddlewareYtlive = () => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [program, setProgram] = React.useState<YtliveProgram | null>(null)

  React.useEffect(() => {
    if (loading) {
      fetch('https://liveinfo-api-middleware.aoirint.com/v1/ytlive')
        .then((data) => data.json())
        .then((data: LiveinfoApiMiddlewareV1YtliveResponse) => {
          const program = data?.program
          const isOnair = program?.isOnair
          const channel = data?.channel

          setProgram({
            isOnair: isOnair ?? false,
            programTitle: program.title ?? null,
            programUrl: program.url ?? null,
            thumbnailUrl: program.thumbnails.standard.url ?? null,
            channelName: channel.name ?? null,
            channelUrl: channel?.url ?? null,
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

export default useLiveinfoApiMiddlewareYtlive
