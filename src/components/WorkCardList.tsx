import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import NextLink  from 'next/link'

export interface WorkCard {
  title: string
  image: string
  imageAlt: string
  url: string
  subtitle: string
  date: string
}

export interface WorkCardListProps {
  cards: WorkCard[]
}

const WorkCardList: React.FC<WorkCardListProps> = ({
  cards,
}) => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="start"
    >
      {cards.map((card, cardIndex) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            key={cardIndex}
            sx={{
              height: "100%",
            }}
          >
            <CardActionArea
              LinkComponent={NextLink}
              href={card.url}
              sx={{
                height: "100%",
              }}
            >
              <CardMedia
                image={card.image}
                title={card.imageAlt}
                component="img"
                sx={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  objectFit: "fill",
                }}
              />
              <CardContent
                sx={{
                  px: 2,
                }}
              >
                <Typography variant="h6" component="div">
                  {card.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {card.subtitle}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {card.date}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default WorkCardList
