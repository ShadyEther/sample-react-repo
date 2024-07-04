import { Box, Button, Container, Icon, IconButton, ListItem, Stack } from '@mui/material'
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import React from 'react'

function LibraryContainer() {
  return (
    <Container>
        <Box>
            <Stack direction='row'>
            <Button
                startIcon={<LibraryMusicRoundedIcon/>}
            >
                Your Libraries
            </Button>
           <IconButton>
            <AddRoundedIcon/>
           </IconButton>
            </Stack>
           
        </Box>
    </Container>
  )
}

export default LibraryContainer