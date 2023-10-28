import { LastfmTrack } from '@/api/useLastfmApiMiddleware'
import NextLink  from 'next/link'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import MuiLink from '@mui/material/Link'
import React from 'react'

interface LastfmApiMiddlewareCardProps {
  track: LastfmTrack
}

const LastfmApiMiddlewareCard: React.FC<LastfmApiMiddlewareCardProps> = ({
  track,
}) => {
  return (
    <>
      <Card sx={{ display: 'flex', p: 2 }}>
        <NextLink href={track.url ?? '#'} passHref legacyBehavior>
          <MuiLink color="inherit" underline="none">
            <CardMedia
              sx={{ width: 96, height: 96 }}
              image={track.albumArtUrl ?? "/images/dummy_square_x512.png"}
              title="Album art"
            />
          </MuiLink>
        </NextLink>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <CardContent sx={{ flexGrow: 1, py: 0 }}>
            <Typography variant="h5" component="div">
              <NextLink href={track.url ?? '#'} passHref legacyBehavior>
                <MuiLink color="inherit" underline="none">
                  {'♪ '}
                  {track.title}
                </MuiLink>
              </NextLink>
            </Typography>
            <Typography variant="body2">
              <NextLink href={track.url ?? '#'} passHref legacyBehavior>
                <MuiLink color="inherit" underline="none">
                  {track.album} - {track.artist}
                </MuiLink>
              </NextLink>
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
            <Typography variant="body2" color="text.secondary">
              Powered by
              {' '}
              <NextLink href="https://www.last.fm/user/aoirint" passHref legacyBehavior>
                <MuiLink color="inherit" underline="always">
                  AudioScrobbler / Last.fm API
                </MuiLink>
              </NextLink>
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  )
}

export default LastfmApiMiddlewareCard
