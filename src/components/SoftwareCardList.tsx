import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import MuiLink from '@mui/material/Link'
import NextLink  from 'next/link'

export interface SoftwareCard {
  title: string
  description: string
  image: string
  imageAlt: string
  useUrl: string | null
  /** 跡地サイトやアーカイブサイトのURL */
  archiveUrl: string | null
  sourceCodeUrl: string | null
  detailUrl: string | null
  sourceProjectUrl: string | null
}

export interface SoftwareCardListProps {
  cards: SoftwareCard[]
}

const SoftwareCardList: React.FC<SoftwareCardListProps> = ({
  cards,
}) => {
  return (
    <Grid container spacing={2}>
      {cards.map((card, cardIndex) => (
        <Grid item xs={6} key={cardIndex}>
          <Card sx={{ display: 'flex', p: 2 }}>
            <Box sx={{ my: 1 }}>
              <CardMedia
                sx={{ width: 64, height: 64 }}
                image={card.image}
                title={card.imageAlt}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <CardContent sx={{ py: 0 }}>
                <Typography variant="h6" component="div">
                    {card.title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                {card.useUrl != null ? (
                  <Button size="small" variant="contained" color="primary">
                    <NextLink href={card.useUrl} passHref legacyBehavior>
                      <MuiLink color="inherit" underline="none">
                        使ってみる
                      </MuiLink>
                    </NextLink>
                  </Button>
                ) : ''}
                {card.archiveUrl != null ? (
                  <Button size="small" variant="outlined" color="info">
                    <NextLink href={card.archiveUrl} passHref legacyBehavior>
                      <MuiLink color="inherit" underline="none">
                        跡地
                      </MuiLink>
                    </NextLink>
                  </Button>
                ) : ''}
                {card.sourceCodeUrl != null ? (
                  <Button size="small" variant="outlined" color="info">
                    <NextLink href={card.sourceCodeUrl} passHref legacyBehavior>
                      <MuiLink color="inherit" underline="none">
                        ソースコード
                      </MuiLink>
                    </NextLink>
                  </Button>
                ) : ''}
                {card.sourceProjectUrl != null ? (
                  <Button size="small" variant="outlined" color="info">
                    <NextLink href={card.sourceProjectUrl} passHref legacyBehavior>
                      <MuiLink color="inherit" underline="none">
                        本体ソースコード
                      </MuiLink>
                    </NextLink>
                  </Button>
                ) : ''}
                {card.detailUrl != null ? (
                  <Button size="small" variant="outlined" color="info">
                    <NextLink href={card.detailUrl} passHref legacyBehavior>
                      <MuiLink color="inherit" underline="none">
                        詳細
                      </MuiLink>
                    </NextLink>
                  </Button>
                ) : ''}
              </CardActions>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default SoftwareCardList
