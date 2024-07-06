import { ListItem, Box, Card, CardContent, IconButton, CardMedia, Typography, Container } from '@mui/material'
import { useParams } from 'next/navigation'

import React, { useEffect, useState } from 'react'
import { getAlbumFeedByOffset } from '../../../_utils/Feed/AlbumFeed/AlbumFeed'


const AlbumListComponent = () => {
    const [albumList,setAlbumlist]=useState([])

    useEffect(() => {
        const fetchAlbumTracks = async () => {
            const data = await getAlbumFeedByOffset(10)
            setAlbumlist(data)
        }

        fetchAlbumTracks()
    }, [])


    const renderAlbumTracks = () => {
        if (albumTracks.length) {
            return (
                <>
                    {
                        albumTracks.map((track: any) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <ListItem
                                    sx={{
                                        width: '100%'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            width: '100%'
                                        }}
                                    >

                                        <Card
                                            sx={{
                                                display: 'flex',
                                                width: '100%'
                                            }}
                                        >
                                            <CardContent
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <IconButton>
                                                    <PlayCircleFilledRoundedIcon />
                                                </IconButton>
                                            </CardContent>
                                            <CardMedia
                                                component='img'
                                                image={albumInfo.image}
                                                sx={{
                                                    width: '5em',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            <CardContent
                                            sx={{
                                                display:'flex',
                                                width:'100%'
                                            }}
                                            >
                                                <Box
                                                sx={{
                                                    flex:1
                                                }}>
                                                    <Box>

                                                        <Typography variant='body2'>
                                                            {track.name}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography variant='caption'>
                                                            {albumInfo.artist_name}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box
                                                display='flex'
                                                alignItems='center'
                                                >
                                                    <IconButton>
                                                    <FavoriteBorderRoundedIcon/>
                                                    </IconButton>

                                                    <IconButton>
                                                    <FileDownloadRoundedIcon/>
                                                    </IconButton>
                                                    
                                                    <IconButton>
                                                    <ShareRoundedIcon/>
                                                    </IconButton>
                                                </Box>

                                            </CardContent>
                                        </Card>


                                    </Box>
                                </ListItem>
                            )
                        })
                    }
                </>
            )
        }
        else return "No tracks"
    }
    return (
        <>
            <Container
                sx={{
                    padding: '1em'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        // alignItems:'baseline',
                        // position:'relative',
                        // width: '100%',
                        // height: '150px',
                        justifyContent: 'left',
                        alignItems: 'flex-end'
                    }}
                >
                    <Box>
                        <Card>
                            {/* <CardActionArea> */}
                            <CardMedia
                                component='img'
                                image={albumInfo.image}
                                sx={{
                                    width: '150px'
                                }}
                            />
                            {/* </CardActionArea> */}
                        </Card>
                    </Box>
                    <Box
                        sx={{
                            marginLeft: '1em'
                        }}>
                        <Box>

                            <Typography variant='caption'>Album</Typography>
                        </Box>
                        <Box
                        >

                            <Typography
                                variant='h4'
                                sx={{
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    maxWidth: '100%'
                                }}
                            >
                                {albumInfo.name}
                            </Typography>
                        </Box>
                        <Box
                            sx={{ display: 'flex' }}
                        >
                            <Typography variant='h5'>{albumInfo.artist_name} &#x2022; {albumInfo.releasedate}</Typography>

                        </Box>
                        <Box
                            sx={{ display: 'flex' }}
                        >
                            <FavoriteBorderRoundedIcon fontSize='large' />
                            <FileDownloadRoundedIcon fontSize='large' />
                            <ShareRoundedIcon fontSize='large' />

                        </Box>
                    </Box>
                </Box>
            </Container>
            <Container
                sx={{
                    marginTop: '1em'
                }}>
                <Box>
                    {renderAlbumTracks()}
                </Box>
            </Container>
        </>

    )
}

export default AlbumListComponent