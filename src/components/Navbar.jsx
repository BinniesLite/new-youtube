import React from 'react'
import {Stack} from '@mui/material';
import { Link } from 'react-router-dom';
import {logo} from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack 
          direction='row' 
          justifyContent="space-between" 
          sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}>
      
      <Link to="/" style={{display: 'flex', alignItems: 'center', objectFit: 'cover'}}>
        <img src={logo} height="45" alt="" />
      </Link>
      
      <SearchBar /> 
    </Stack>
  )
}

export default Navbar