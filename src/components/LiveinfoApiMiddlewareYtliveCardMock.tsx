import React from 'react'
import LiveinfoApiMiddlewareYtliveCard from './LiveinfoApiMiddlewareYtliveCard'
import { YtliveProgram } from '@/api/useLiveinfoApiMiddlewareYtlive'

const mockProgram: YtliveProgram = {
  isOnair: true,
  programTitle: 'title',
  programUrl: 'https://example.com',
  thumbnailUrl: '/images/dummy_square_x512.png',
  channelName: 'channel name',
  channelUrl: 'https://example.com',
}

const LiveinfoApiMiddlewareYtliveCardMock: React.FC = () => {
  return <LiveinfoApiMiddlewareYtliveCard program={mockProgram} />
}

export default LiveinfoApiMiddlewareYtliveCardMock
