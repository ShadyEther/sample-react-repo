

import { AppBar, Toolbar, Typography, Chip, Badge, Avatar, Container } from "@mui/material";
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

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
            {children}
        </>
    );

}