import { Box, Card, Container, Link, Typography } from "@mui/material";
import Image from "next/image";

export default function Home(){
  return (
    <Container
    >
      <Typography
    variant="h5"
    textAlign={'center'}
    >
      These are the projects based on React

    </Typography>
    <Box
    justifyContent={"center"}
    sx={{
      display:'flex',
      padding:'5%',
      flexDirection:'column'
    }}>
      <Card
      sx={{
        padding:'2%',
        border: 'solid',
        margin: '2%',
      }}>
      <Typography variant="h7" align="center">
      <Link href="/auth">Registration Form using Regex Validation-Assignment 1</Link>
      </Typography>
        
      </Card>
      <Card
      sx={{
        padding:'2%',
        border: 'solid',
        margin: '2%',
      }}>
      <Typography variant="h7" align="center">
      <Link href="/todo">ToDo List-Assignment 2</Link>
      </Typography>
        
      </Card>
    </Box>

    </Container>
    

    
  )
}
