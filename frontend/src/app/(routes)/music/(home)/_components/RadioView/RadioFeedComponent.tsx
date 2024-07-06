'use client'

import React, { useEffect, useState } from 'react'
import { getRadioFeed } from '../../../_utils/Feed/RadioFeed/RadioFeed';
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, List, ListItem, ListSubheader, Tooltip, Typography } from '@mui/material';

const RadioFeedComponent = () => {

    const [radioFeed, setRadioFeed] = useState([]);


    useEffect(() => {
        const fetchRadioFeed = async () => {
            const feed = await getRadioFeed();
            setRadioFeed(feed);
        };

        fetchRadioFeed();
    }, []);

    const renderradioFeed = () => {
        if (radioFeed.length) {
            return (
                <>
                    {
                        radioFeed.map((radio: any) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <ListItem>
                                    <Card sx={{
                                        width:'150px',
                                        height:'150px'
                                    }}>
                                        <Tooltip title={radio.dispname}>
                                        <CardActionArea>
                                            <CardMedia
                                            component='img'
                                            image={radio.image}
                                            sx={{
                                                height: '100px', 
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
                                                    {radio.dispname}
                                                    {/* {radio.name} */}
                                                    
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
        else return "No Radio Feed"
    }



    return (
        <>
        <Container>
            <Typography variant='h5'>Radios</Typography>
        <Box
            sx={{
                display:'flex',
            }}
        >
            
            {renderradioFeed()}
        </Box>

            
        </Container>
        
        
        </>
    )
}

export default RadioFeedComponent