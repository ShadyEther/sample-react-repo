
"use client"
import { useEffect } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Container,Box, Card, CardContent, Typography } from '@mui/material';

const SuccessPage = () => {
  const router = useRouter();


 // useEffect(() => {
  //   setTimeout(() => {
  //     router.push('/');
  //   }, 5000); // Redirect back to form after 5 seconds
  // }, []);
  const paramKeys=[`firstName`, `lastName`,  `username`,  `email`,  `password`,  `phoneNo`,  `country`,  `city`,  `panNo`,  `aadharNo`]
  const searchParams=useSearchParams()
  const params={}
  paramKeys.forEach(element => {
    params[element]=searchParams.get(element);
  });
  // console.log(params["firstName"])

  return (
    
    <Box
    justifyContent={'center'}
    alignItems={'center'}
    sx={{display:'flex'}}
    // height={'100%'}
    >
      
      <Box
      width={'50ch'}
      sx={{
        padding:"30px"
      }}
      >
        <Typography variant='h6' component={'div'}>Form has been submitted and these are the details</Typography>
        <Card 
        variant='outlined'
        >
          <CardContent
          
          sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            gap:'1em'
          }}>
            <Typography>First Name: {params["firstName"]}</Typography>
            <Typography>Last Name: {params["lastName"]}</Typography>
            <Typography>UserName: {params["username"]}</Typography>
            <Typography>Email: {params["firstName"]}</Typography>
            <Typography>Password: {params["password"]}</Typography>
            <Typography>Phone No: {params["phoneNo"]}</Typography>
            <Typography>Country: {params["country"]}</Typography>
            <Typography>City: {params["city"]}</Typography>
            <Typography>PAN no.: {params["panNo"]}</Typography>
            <Typography>Aadhar No.: {params["aadharNo"]}</Typography>
            
          
          </CardContent>
        </Card>
      </Box>
    </Box>
    
    
    
    )
      
};

export default SuccessPage;
