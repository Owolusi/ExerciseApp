import React from 'react';
import { useState } from 'react';
import {Box} from '@mui/material';
import HeroBanner from '../../component/HeroBanner';
import SearchExercise from '../../component/SearchExercise';
import Exercises from '../../component/Exercises';


const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercise />
      <Exercises />

      
    </Box>
  )
}

export default Home