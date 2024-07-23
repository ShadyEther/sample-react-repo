'use client'


import Carousel from '@/components/ui/Carousel/Carousel';
import { Container } from '@mui/material';
import React from 'react'

const DailyDeals = () => {


  const items = [
    { image: 'https://cdn.mos.cms.futurecdn.net/hqWyzQqnXU4QiLmTPhfVVQ.jpg', alt: 'Description 1' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuybnoHeSTfpdQWXxhQ7RkqoM8pOHw9EQ6flAflPQsklLmukXiDXzVE_bVhUA58rkeqYA&usqp=CAU', alt: 'Description 2' },
    { image: 'https://twentytwowords.com/wp-content/uploads/2021/08/37-random-products-that-we-love_31.jpg', alt: 'Description 3' },
    { image: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-01/13/20/asset/7e4eedb15f20/sub-buzz-77-1578948330-3.png?downsize=900:*&output-format=auto&output-quality=auto', alt: 'Description 4' },
    // Add more items as needed
  ];


  return (
    <>
      <Container>
        <Carousel items={items} autoPlay autoPlayInterval={5000} />
      </Container>
    </>
  )
}

export default DailyDeals