'use client'

import React, { useEffect, useState } from 'react'
import { getRadioFeed } from '../../_utils/Feed/RadioFeed/RadioFeed'
import { List, ListItem } from '@mui/material';

const HomeViewComponent = () => {
  const [radioFeed, setRadioFeed] = useState([]);

  useEffect(() => {
    const fetchRadioFeed = async () => {
      const feed = await getRadioFeed();
      setRadioFeed(feed);
    };

    fetchRadioFeed();
  }, []);
  
  useEffect(()=>{

  })

  const renderradioFeed=()=>{
    if(radioFeed.length){
      return (
        <>
        {
          radioFeed.map((radio:any)=>{
            return (
              // eslint-disable-next-line react/jsx-key
              <ListItem>{radio.name}</ListItem>
            )
          })
        }
        </>
      )
    }
    else return "No Radio Feed"
  }

  return (
    <>
    <List>
        {renderradioFeed()}
    </List>
    </>
  )
}

export default HomeViewComponent