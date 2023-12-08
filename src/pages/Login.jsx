import React, { useState } from 'react'
import {Grid,TextField, Button} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import regImg from '../assets/registration.png'
import googleImg from '../assets/google.png'
import Headingforreglog from '../components/Headingforreglog';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


let initvalues = {
  email : '',
  password: '',
  loading : false
}
const Login = () => {
  const auth = getAuth();
  let [values, setValues]= useState(initvalues)
  let handleValues = (e)=>{
    setValues({
      ...values,
      [e.target.name]: e.target.value

    })
  }
let handleSubmit = ()=>{
  let {email, password} = values;
  setValues({
    loading: true
  })
  signInWithEmailAndPassword(auth, email, password).then((userCredintial)=>{
      setValues({
        ...values,
        email: '',
        password: '',
        loading: false
      })
  })

}
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
            <TextField value={values.email} onChange={handleValues} name='email' id="outlined-basic" label="Email Address" variant="outlined" type='email' placeholder='urmi21riddhi@example.com'/>
          </div>
          <div className='textfield'>
            <TextField value={values.password} onChange={handleValues} name='password' id="outlined-basic" label="Password" variant="outlined" type='password' />
          </div>
          <div className='textfield'>
          {
            values.loading
            ?
              <LoadingButton loading variant="outlined">
                  Submit
              </LoadingButton>
            :
              <Button onClick={handleSubmit} variant="contained">Login to Continue</Button>
          }
            
            
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