'use client'

import React, { useEffect, useState } from 'react'
import { getRadioFeed } from '../../_utils/Feed/RadioFeed/RadioFeed'
import { List, ListItem } from '@mui/material';
import RadioFeedComponent from './RadioView/RadioFeedComponent';
import AlbumViewComponent from './AlbumView/AlbumViewComponent';

const HomeViewComponent = () => {
  const [radioFeed, setRadioFeed] = useState([]);

 

  return (
    <>
    {/* <RadioFeedComponent/> */}
    <AlbumViewComponent/>
    </>
  )
}

export default HomeViewComponent