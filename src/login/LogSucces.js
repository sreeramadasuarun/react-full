import React from 'react'
import success from '../assets/success.jpg'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

const LogSucces = () => {
    const navigate = useNavigate()

    return (
        <div className='box_success'>
            <img src={success} alt="" />
            <Button onClick={() => { navigate("/") }} variant="contained">Go To HomePage</Button>


        </div>
    )
}

export default LogSucces
