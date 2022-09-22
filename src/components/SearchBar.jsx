import React, { useState } from 'react'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <>
        <Paper 
          component='form'
          sx={{
            borderRadius: 20,
            border: '1px solid white',
            pl: 2,
            my: 3,
            boxShadow: 'none',
            mr: {sm: 5},
            display: {sm: 'flex'}
          }}
        >
          <input 
            className='search-bar'
            value={searchTerm}
            type="text" 
            onChange={(e) => setSearchTerm(e.target.value)}

            />
          <IconButton>
            <Search/>   
          </IconButton>
        </Paper>
    </>
  )
}

export default SearchBar;