import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Button} from '@mui/material';

export default function Details() {
  const navigate = useNavigate()

  return (
    <div>
    <Button variant='outlined' onClick={() => navigate(-1)}>Back</Button>
    </div>
  )
}
