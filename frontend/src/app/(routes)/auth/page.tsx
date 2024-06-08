
"use client"
import Form from "@/components/auth/Form";

import { Box, Container, Typography } from "@mui/material";


const Home = () => {

    return (

        <Box
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
                display: "flex",
                flexDirection: 'column'
            }}>
            <Typography variant="h6">The Sample Form</Typography>
            <Box
                width={'60ch'}
                sx={{
                    padding: '20px',

                }}>
                <Form />
            </Box>
        </Box>
    );
};

export default Home;
