import { NicoliveProgram } from '@/api/useLiveinfoApiMiddlewareNicolive'
import NextLink  from 'next/link'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import MuiLink from '@mui/material/Link'
import React from 'react'

interface LiveinfoApiMiddlewareNicoliveCardProps {
  program: NicoliveProgram
}

const LiveinfoApiMiddlewareNicoliveCard: React.FC<LiveinfoApiMiddlewareNicoliveCardProps> = ({
  program,
}) => {
  return (
    <>
      <Card sx={{
        display: 'flex',
        ...program.thumbnailUrl != null ? {
          backgroundImage: `url(${program.thumbnailUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: 'whitesmoke',
        } : {},
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          p: 2,
          ...program.thumbnailUrl != null ? {
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
          } : {},
        }}>
          <CardContent sx={{ flexGrow: 1, py: 0 }}>
            <Typography variant="h5" component="div">
              <NextLink href={program.programUrl ?? '#'} passHref legacyBehavior>
                <MuiLink color="inherit" underline="none">
                  {program.programTitle}
                </MuiLink>
              </NextLink>
            </Typography>
            <Typography variant="body2">
              <NextLink href={program.communityUrl ?? '#'} passHref legacyBehavior>
                <MuiLink color="inherit" underline="none">
                  {program.communityName}
                </MuiLink>
              </NextLink>
              {' - '}
              <NextLink href={program.userUrl ?? '#'} passHref legacyBehavior>
                <MuiLink color="inherit" underline="none">
                  {program.userName}
                </MuiLink>
              </NextLink>
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
            <Typography variant="body2" color="text.secondary">
              Powered by
              {' '}
              <NextLink href="https://com.nicovideo.jp/community/co5633084" passHref legacyBehavior>
                <MuiLink color="inherit" underline="always">
                  ニコニコ生放送
                </MuiLink>
              </NextLink>
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  )
}

export default LiveinfoApiMiddlewareNicoliveCard
