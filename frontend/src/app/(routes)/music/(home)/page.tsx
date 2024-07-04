import { AppBar, Box, Container, CssBaseline, Drawer, Typography } from '@mui/material'
import React from 'react'
import DrawerComponent from '../_components/DrawerComponent/DrawerComponent'
import CornerNavbar from '../_components/CornerNavbar/CornerNavbar'
import MusicPlayer from '../_components/MusicPlayer/MusicPlayer'

function home() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: '240px'}}>
                    <Drawer
                        variant="permanent"
                        open

                    >
                        <CornerNavbar />
                        <Box>
                            <DrawerComponent />
                        </Box>
                    </Drawer>

                </Box>

                <Box
                >
                    <Typography paragraph>
                        hehe
                    </Typography>
                </Box>




            </Box>


            <Drawer
                anchor='bottom'
                open
                variant='permanent'
            >
                <MusicPlayer />
            </Drawer>
        </>
    )
}

export default home