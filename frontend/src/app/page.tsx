import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";

export default function Home(){
  return (
    
    <Box
    justifyContent={"center"}
    sx={{
      display:'flex',
      padding:'15%'
    }}>

    <Typography variant="h3" align="center">
      <Link href="/auth">Registration Form using Regex Validation-Assignment 1</Link>
      </Typography>
    </Box>

    
  )
}
