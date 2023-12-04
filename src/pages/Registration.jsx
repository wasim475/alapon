import React, { useState } from 'react'
import {Grid,TextField, Button} from '@mui/material';
import regImg from '../assets/registration.png'
import Headingforreglog from '../components/Headingforreglog';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


let initvalues = {
  email : '',
  fullName: '',
  password: ''
}
const Registration = () => {
  const auth = getAuth();

  let [values, setValues] = useState(initvalues)
  let handleValues = (e)=>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
  })
  }

  let handleSubmit = ()=>{
    let {email, fullName, password} = values
    createUserWithEmailAndPassword(auth, email, password)
  }
  return (
    <>
    <Grid container spacing={2}>
        <Grid item xs={6}>
         <div className='regContainer'>
          <div className='regInfo'>
          <Headingforreglog className='cssforReg' Title='Get started with easily register'/>
          <p>Free register and you can enjoy it</p>
          </div>
          <div className='textfield'>
            <TextField onChange={handleValues} name='email' id="outlined-basic" label="Email Address" variant="outlined" type='email' placeholder='urmi21riddhi@example.com'/>
          </div>
          <div className='textfield'>
            <TextField onChange={handleValues} name='fullName' id="outlined-basic" label="Ful name" variant="outlined" placeholder='Urmi Riddhi'/>
          </div>
          <div className='textfield'>
            <TextField onChange={handleValues} name='password' id="outlined-basic" label="Password" variant="outlined" type='password' />
          </div>
          <div className='textfield'>
            <Button onClick={handleSubmit} variant="contained">Sign up</Button>
          </div>
          <div className='textfield'>
            <p className='footer'>Already have an account? <span className='sign'>sign in</span></p>
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

export default Registration