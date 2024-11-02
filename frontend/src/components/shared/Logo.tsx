//import React from 'react'

import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

function Logo() {
  return (
    <div style={
        {
            display:'flex', 
            marginRight:'auto',
            alignItems:'center',
            gap:'8px'
        }
    }>
      <Link to={"/"}>
      <img src="gptlogo.png" alt="openai" height={"30px"} width={"30px"} className="image-inverted" />
        
      </Link>
      <Typography sx={
            {
                
                display:{md:"block", sm:"none",xs:"none",},
                //mr:"auto",
                marginRight:"auto",
                fontWeight:"800",
                textShadow:"2px 2px 20px #000",
                color:"white",
            }}>
                    <span style={{fontSize:"25px", color:"white"}}>
                        MERN 
                    </span>
                    -GPT
        </Typography>
    </div>
  );
}

export default Logo
