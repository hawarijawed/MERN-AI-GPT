//import React from 'react'

import { TextField } from "@mui/material";

type Props = {
    name: string;
    type: string;
    label: string;
}
function CustomizedInput(props:Props) {
  return <TextField 
  margin="normal"
  InputLabelProps={{style:{color:'white'}}}
  name={props.name} 
  label={props.label} 
  type={props.type}
  inputProps={{style:{width:"400px",borderRadius:10, padding:20,fontSize:15,color:"white"}}}/>
}

export default CustomizedInput
