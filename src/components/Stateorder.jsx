import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Stateorder = () => {
     
     var [num,setNum]=useState(0)
     const inc=()=>{
      setNum(++num)
     }
     const dec=()=>{
      setNum(--num)
     }
  return (
    <div>
      <Typography>{num}</Typography>
         
      <Button variant ='contained'onClick ={dec}>-</Button><br></br>
      <Button variant ='contained'onClick={inc}>+</Button>
      
    </div>
  )
}

export default Stateorder
