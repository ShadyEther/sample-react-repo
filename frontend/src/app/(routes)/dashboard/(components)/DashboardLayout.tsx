"use client"

import { AppBar, Avatar, Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import TableChartRoundedIcon from '@mui/icons-material/TableChartRounded';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
import React, { useState } from 'react'
import TableComponent from './TableComponent';
import ChartComponent from './ChartComponent';
import CalendarComponent from './CalendarComponent';

const DashboardLayout = ({ children }: any) => {
    const [toggleDrawer,setToggleDrawer]=useState<boolean>(false)





    return (
        <>
        <AppBar position='sticky'>
            <Toolbar>
                <IconButton onClick={()=>{setToggleDrawer(true)}}>
                    <TableRowsRoundedIcon/>
                </IconButton >
                <Typography>Dashboard</Typography>
                <Avatar/>                
            </Toolbar>
        </AppBar>
        <Drawer open={toggleDrawer} onClose={()=>{setToggleDrawer(false)}}>
            
            <Box>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <TableChartRoundedIcon/>
                                </ListItemIcon>
                            <ListItemText primary='Table View'/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
        <Container sx={{
            display:'flex',
            justifyContent:'space-between',
            flexWrap:'wrap',
        }}>
            <Box alignItems={'center'} padding={'1%'} width={'50%'}>
                <TableComponent/>
            </Box>
            <Box alignItems={'center'} padding={'1%'} width={'25%'} height={'500px'}>
                <ChartComponent/>
            </Box>
            <Box alignItems={'center'} padding={'1%'} width={'25%'}>
                <CalendarComponent/>
            </Box>
            
        </Container>
        </>
    )
}

export default DashboardLayout