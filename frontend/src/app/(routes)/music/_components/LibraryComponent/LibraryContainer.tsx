import { Box, Button, Container, Icon, IconButton, List, ListItem, Stack } from '@mui/material'
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import React from 'react'
import LibraryItemComponent from './LibraryItemComponent';
import { getRecentlyPlayedTracks } from '../../_utils/Libraries/RecentlyPlayed/RecentlyPlayed';




const trackData: Track = {
    id: "168",
    name: "J'm'e FPM",
    duration: 183,
    artist_id: "7",
    artist_name: "TriFace",
    artist_idstr: "triface",
    album_name: "Premiers Jets",
    album_id: "24",
    license_ccurl: "",
    position: 1,
    releasedate: "2004-12-17",
    album_image: "https://usercontent.jamendo.com?type=album&id=24&width=300&trackid=168",
    audio: "https://prod-1.storage.jamendo.com/?trackid=168&format=mp31&from=pfvitrGFa1CdOTB2F%2FNSfA%3D%3D%7CGc8TEbZN4PgKFAW3SvuYxw%3D%3D",
    audiodownload: "https://prod-1.storage.jamendo.com/download/track/168/mp32/",
    prourl: "",
    shorturl: "https://jamen.do/t/168",
    shareurl: "https://www.jamendo.com/track/168",
    audiodownload_allowed: true,
    image: "https://usercontent.jamendo.com?type=album&id=24&width=300&trackid=168"
  };

  function LibraryContainer() {
    const data=getRecentlyPlayedTracks()
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
        <Box>
            <List>
                <ListItem>
                    <LibraryItemComponent track={data}/>
                </ListItem>
            </List>
        </Box>
    </Container>
  )
}

export default LibraryContainer