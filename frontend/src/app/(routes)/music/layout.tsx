import { Box, Drawer } from "@mui/material";
import MusicPlayer from "./_components/MusicPlayer/MusicPlayer";
import LibraryComponent from "./_components/LibraryComponent/LibraryComponent";
import CornerNavbar from "./_components/CornerNavbar/CornerNavbar";




export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

    return (
        <html lang="en">
            <head>
            </head>
            <body>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: '300px'}}>
                    <Drawer
                        variant="permanent"
                        open

                    >
                        <CornerNavbar />
                        <Box>
                            <LibraryComponent />
                        </Box>
                    </Drawer>

                </Box>

                <Box
                sx={{
                    width:'100%',
                }}
                >
                    {children}
                </Box>




            </Box>


            <Drawer
                anchor='bottom'
                open
                variant='permanent'
            >
                <MusicPlayer />
            </Drawer>
                
            </body>
        </html>
    );

}