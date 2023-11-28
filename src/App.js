import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import ExerciseDetails from './pages/ExerciseDetails/ExerciseDetails';
import Home from './pages/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';

const App=()=> {
  return(
    <Box width='400px' sx={{width:{xl: '1488px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id"  element={<ExerciseDetails/>} />
      </Routes>
      <Footer />
      </Box>
      
  )
 
}

export default App;
