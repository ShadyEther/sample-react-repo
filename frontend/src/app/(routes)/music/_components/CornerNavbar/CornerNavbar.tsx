

import { Box, ButtonGroup, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import React from 'react'

function CornerNavbar() {
  return (
    <List>
        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                <HomeRoundedIcon />
                </ListItemIcon>
                <ListItemText primary='Home'/>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                <SearchRoundedIcon/>
                </ListItemIcon>
                <ListItemText primary='Search'/>
            </ListItemButton>
        </ListItem>
    </List>
  )
}

export default CornerNavbar