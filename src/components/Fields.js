import React from 'react'
import Button from '@mui/material/Button';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Stack from '@mui/material/Stack';

const Fields = ({name, email, index}) => {
  return (
    <div className='data_values'>
        <h4>{name}</h4>
        <h4>{email}</h4>
        <Stack>
            <Button variant = "contained" color = "error">
                <RemoveCircleOutlineIcon />
            </Button> 
        </Stack>      
    </div>
  )
}

export default Fields