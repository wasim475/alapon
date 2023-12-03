import React from 'react'
import {Grid} from '@mui/material';
import regImg from '../assets/registration.png'
import Headingforreglog from '../components/Headingforreglog';
const Registration = () => {
  return (
    <>
    <Grid container spacing={2}>
        <Grid item xs={6}>
          <Headingforreglog className='cssforReg' Title='Get started with easily register'/>
        </Grid>
        <Grid item xs={6}>
          <img className='regImg' src={regImg}/>
        </Grid>
      </Grid>
      </>
  )
}

export default Registration