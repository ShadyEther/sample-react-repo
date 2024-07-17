'use client'


import { getAlbumTracks } from '@/app/(routes)/music/_utils/Feed/AlbumFeed/AlbumFeed'
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, IconButton, ListItem, Typography } from '@mui/material'
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';

import { useParams } from 'next/navigation'

import React, { useEffect, useState } from 'react'

const AlbumComponent = () => {

    const albumId = useParams().id
    const [albumTracks, setAlbumTracks] = useState([])
    const [albumInfo, setAlbumInfo] = useState([])

    useEffect(() => {
        const fetchAlbumTracks = async () => {
            const data = await getAlbumTracks(albumId)
            setAlbumTracks(data[0].tracks)
            setAlbumInfo(data[0])
        }

        fetchAlbumTracks()
    }, [albumId])


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

export default AlbumComponent