import React from 'react'
import { TextField,InputAdornment } from '@mui/material'
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import "./searchBar.css"

const SearchBar = (props) => {
  const {handleSearch,query} = props
  return (
    <div className="search-bar">
    <TextField
    autoFocus
    label="Search"
    fullWidth
    placeholder="Search City.... "
    value={query}
    onChange={handleSearch}
    InputProps={{
      startAdornment: (
          <InputAdornment position="start">
          <BedroomParentIcon color='primary' />
          </InputAdornment>
          ),
        }}
        variant="outlined"
        />
        </div>
  )
}

export default SearchBar