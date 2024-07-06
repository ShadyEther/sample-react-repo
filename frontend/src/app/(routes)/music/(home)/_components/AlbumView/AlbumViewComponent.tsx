import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Chip, Container, ListItem, Tooltip, Typography } from '@mui/material';
import { getAlbumFeed } from '../../../_utils/Feed/AlbumFeed/AlbumFeed';

const AlbumViewComponent = () => {
  const [albumFeed, setAlbumFeed] = useState([]);

  useEffect(() => {
    const fetchAlbumFeed = async () => {
      const feed = await getAlbumFeed();
      setAlbumFeed(feed);
    }

    fetchAlbumFeed();
  }, [])

  const renderAlbumFeed = () => {
    if (albumFeed.length) {
      return (
        <>
          {
            albumFeed.map((album: any) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <ListItem key={album.id}>
                  <Card sx={{
                    width: '150px',
                    // height:'200px'
                  }}>
                    <Tooltip title={album.dispname}>
                      <CardActionArea>
                        <CardMedia
                          component='img'
                          image={album.image}
                          sx={{
                            objectFit: 'cover'
                          }}
                        />
                        <CardContent
                        >
                          <Typography variant='body2'
                            sx={{
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}

                          >
                            {album.name}
                          </Typography>
                          <Typography variant='caption'
                            sx={{
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {album.artist_name}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Tooltip>
                  </Card>
                </ListItem>
              )
            })
          }
        </>
      )
    }
    else return "No Album Feed"
  }


  return (
    <>
      <Container>
        <Box
        sx={{
          display:'flex'
        }}>
          <Box
          sx={{flex:'1'}}>

        <Typography variant='h5'>Albums</Typography>
          </Box>
          <Box>
            <Button>
              Show More
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
          }}
        >

          {renderAlbumFeed()}
        </Box>

        


      </Container>
    </>
  )
}

export default AlbumViewComponent