import React from 'react'
import {Grid,TextField, Button} from '@mui/material';
import regImg from '../assets/registration.png'
import googleImg from '../assets/google.png'
import Headingforreglog from '../components/Headingforreglog';
const Login = () => {
  return (
    <>
    <Grid container spacing={2}>
        <Grid item xs={6}>
         <div className='regContainer'>
          <div className='regInfo'>
          <Headingforreglog className='cssforReg' Title='Login to your account!'/>
          <img className='googleImg' src={googleImg}/>
          </div>
          <div className='textfield'>
            <TextField id="outlined-basic" label="Email Address" variant="outlined" type='email' placeholder='urmi21riddhi@example.com'/>
          </div>
          <div className='textfield'>
            <TextField id="outlined-basic" label="Password" variant="outlined" type='password' />
          </div>
          <div className='textfield'>
            <Button variant="contained">Login to Continue</Button>
          </div>
          <div className='textfield'>
            <p className='footer'>Don’t have an account ? <span className='sign'>Sign up</span></p>
          </div>

         </div>
        </Grid>
        <Grid item xs={6}>
          <img className='regImg' src={regImg}/>
        </Grid>
      </Grid>
      </>
  )
}

export default Login;