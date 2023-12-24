import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
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
    <Grid container spacing={2}>
      {cards.map((card, cardIndex) => (
        <Grid item xs={12} lg={3} key={cardIndex}>
          <Card>
            <CardActionArea
              LinkComponent={NextLink}
              href={card.url}
              sx={{
                p: 2,
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
              <CardContent>
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
