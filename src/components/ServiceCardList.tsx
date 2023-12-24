import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import NextLink  from 'next/link'

export interface ServiceCard {
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  url: string
}

export interface ServiceCardListProps {
  cards: ServiceCard[]
}

const ServiceCardList: React.FC<ServiceCardListProps> = ({
  cards,
}) => {
  return (
    <Grid container spacing={2}>
      {cards.map((card, cardIndex) => (
        <Grid item xs={12} md={6} key={cardIndex}>
          <Card>
            <CardActionArea
              LinkComponent={NextLink}
              href={card.url}
              sx={{
                display: 'flex',
                height: '100%',
                p: 2,
              }}
            >
              <Box sx={{ my: 1 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 64, height: 64, objectFit: "contain" }}
                  image={card.image}
                  title={card.imageAlt}
                />
              </Box>
              <Box sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <CardContent sx={{ py: 0 }}>
                  <Typography variant="h6" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default ServiceCardList
