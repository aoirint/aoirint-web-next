import React from 'react'
import LastfmApiMiddlewareCard from './LastfmApiMiddlewareCard'
import { LastfmTrack } from '@/api/useLastfmApiMiddleware'

const mockTrack: LastfmTrack = {
  isPlaying: true,
  title: 'title',
  url: 'https://example.com',
  artist: 'artist',
  album: 'album',
  albumArtUrl: '/images/dummy_square_x512.png',
}

const LastfmApiMiddlewareCardMock: React.FC = () => {
  return <LastfmApiMiddlewareCard track={mockTrack} />
}

export default LastfmApiMiddlewareCardMock
