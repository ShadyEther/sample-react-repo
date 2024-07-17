import { ListItem, Box, Card, CardContent, IconButton, CardMedia, Typography, Container, Grid, Button, CardActionArea } from '@mui/material'
import { useParams, useRouter } from 'next/navigation'

import React, { useEffect, useState } from 'react'
import { getAlbumFeedByOffset } from '../../../_utils/Feed/AlbumFeed/AlbumFeed'


const AlbumListComponent = () => {
    const [albumList, setAlbumlist] = useState([])
    const [offset, setOffset] = useState(10)

    const router = useRouter()

    useEffect(() => {
        const fetchAlbumFeedbyOffset = async () => {
            const data = await getAlbumFeedByOffset(offset)
            if (albumList.length) {

                setAlbumlist(prevList => [...prevList, ...data]);
            }
            else {
                setAlbumlist(data);

            }
        }

        fetchAlbumFeedbyOffset()
    }, [offset])


    const openAlbum = (id: any) => {
        router.push(`./albums/${id}`)
    }


    const renderAlbumList = () => {
        if (albumList.length) {
            console.log((albumList))

            return (
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 16, md: 20 }}>
                    {albumList.map((album) => {
                        return (
                            <Grid item xs={2} sm={4} md={4} key={album.id}>
                                <Card>
                                    <CardActionArea
                                        onClick={()=>openAlbum(album.id)}
                                    >

                                        <CardMedia
                                            component='img'
                                            image={album.image}
                                            sx={{
                                                objectFit: 'cover'
                                            }}
                                        />

                                        <CardContent
                                        >
                                            <Typography variant='h6'
                                                sx={{
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                }}

                                            >
                                                {album.name}
                                            </Typography>
                                            <Typography variant='body2'
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
                                </Card>
                            </Grid>
                        )
                    }

                    )}

                </Grid>
            )
        }
        else {
            return (
                <>
                    Loading...
                </>
            )

        }

    }

    return (
        <>
            <Container>
                <Box>
                    <Typography>Albums</Typography>
                </Box>
                <Box>
                    {renderAlbumList()}
                </Box>
                <Box >
                    <Button onClick={() => { setOffset(offset + 10) }}>
                        Load More
                    </Button>
                </Box>
            </Container>
        </>
    )


}

export default AlbumListComponent