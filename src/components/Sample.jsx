import { Typography } from '@mui/material'
import React from 'react'

const Sample = () => {
    var name="react"
    var fname="manu"
  return (
    <div>
      <Typography variant='h2'>welcome to {name}</Typography>
      <Typography variant='h3'>welcome {fname}</Typography>     
    </div>
  )
}

export default Sample