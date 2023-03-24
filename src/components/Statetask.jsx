import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Statetask = () => {
    var [pagename, setPagename] = useState()
    useEffect(() => {setPagename("the world")}, [])
    
    const ChangeName = () => {
        setPagename("Home Page")
    }
    const galleryName = () => {
        setPagename("Gallery page")
    }
    const contcatName = () => {
        setPagename("Contcat page")
    }


    return (
        <div>
            <Button variant='contained' color='primary' onClick={ChangeName}>Home Page</Button>
            <Button variant='contained' color='secondary' onClick={galleryName}>Gallery Page</Button>
            <Button variant='contained' color='error' onClick={contcatName}>Contact Page</Button>
            <Typography>Welcome to{pagename}</Typography>

        </div>
    )
}

export default Statetask
