import React from 'react'
import LiveinfoApiMiddlewareNicoliveCard from './LiveinfoApiMiddlewareNicoliveCard'
import { NicoliveProgram } from '@/api/useLiveinfoApiMiddlewareNicolive'

const mockProgram: NicoliveProgram = {
  isOnair: true,
  programTitle: "title",
  programUrl: "https://example.com",
  thumbnailUrl: "/images/dummy_square_x512.png",
  communityName: "community name",
  communityUrl: "https://example.com",
  userName: "user",
  userUrl: "https://example.com",
}

const LiveinfoApiMiddlewareNicoliveCardMock: React.FC = () => {
  return (
    <LiveinfoApiMiddlewareNicoliveCard
      program={mockProgram}
    />
  )
}

export default LiveinfoApiMiddlewareNicoliveCardMock
