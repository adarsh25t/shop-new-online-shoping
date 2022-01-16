import * as React from 'react';
import {styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  });

const Input_1 = ({title})=>{
    return(
        <CssTextField label={title} id="custom-css-outlined-input" />
    )
}
export {Input_1};