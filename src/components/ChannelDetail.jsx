import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import {Videos, ChannelCard} from './';

const ChannelDetail = () => {

  const {id} = useParams();

  return (
    <div>{id}</div>
  )
  
}

export default ChannelDetail