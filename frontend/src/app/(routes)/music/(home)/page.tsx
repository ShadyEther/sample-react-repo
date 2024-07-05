

import { AppBar, Avatar, Badge, Box, Chip, Container, Toolbar, Typography } from '@mui/material'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import React from 'react'
import HomeViewComponent from './_components/HomeViewComponent';


function page() {
  return (
    <>
    <AppBar 
    position='sticky'
    >
        <Toolbar>
            <Container>
                <Typography>Explore</Typography>
                <Chip label="All"/>
                <Chip label="Year"/>
                <Chip label="Genre"/>
            </Container>
            <Badge variant='dot'>
                <NotificationsNoneRoundedIcon/>
            </Badge>
            <Avatar/>
            
        </Toolbar>
    </AppBar>
    <Box>
        <HomeViewComponent/>
    </Box>
    </>
  )
}

export default page