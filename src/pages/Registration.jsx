import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {Grid,TextField, Button, Alert} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import regImg from '../assets/registration.png'
import Headingforreglog from '../components/Headingforreglog';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";


let initvalues = {
  email : '',
  fullName: '',
  password: '',
  error: '',
  loading : false,
  eye: false
}
const Registration = () => {
  const auth = getAuth();
  let Navigate = useNavigate()

  let [values, setValues] = useState(initvalues)
  let handleValues = (e)=>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
  })
  }

  let handleSubmit = ()=>{
  let {email, fullName, password} = values;
  if(!email){
    setValues({
      ...values,
      error: 'Please enter an email.'
    })
    return
  }
  if(!fullName){
    setValues({
      ...values,
      error: 'Please enter name.'
    })
    return
  }
  if(!password){
    setValues({
      ...values,
      error:'Please enter password.'
    })
    return
  }
  setValues({
    ...values,
    loading: true
})
   
    createUserWithEmailAndPassword(auth, email, password).then((user)=>{
      setValues({
        ...values,
        email: '',
        fullName: '',
        password: '',
        error: '',
        loading: false
    })
    sendEmailVerification(auth.currentUser)
    .then(() => {
      console.log('verification code sent');
    });
    Navigate('/login')
    })
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
            <TextField value={values.email} onChange={handleValues} name='email' id="outlined-basic" label="Email Address" variant="outlined" type='email' placeholder='urmi21riddhi@example.com'/>
            {values.error.includes('email') && <Alert severity="error">{values.error}</Alert>}
          </div>
          <div className='textfield'>
            <TextField value={values.fullName} onChange={handleValues} name='fullName' id="outlined-basic" label="Ful name" variant="outlined" placeholder='Urmi Riddhi'/>
            {values.error.includes('name') && <Alert severity="error">{values.error}</Alert>}
          </div>
          <div className='textfield'>
            <TextField value={values.password} onChange={handleValues} name='password' id="outlined-basic" label="Password" variant="outlined" type={values.eye?'text':'password'} />
            {values.error.includes('password') && <Alert severity="error">{values.error}</Alert>}
            <div onClick={()=> setValues({...values, eye: !values.eye})}>
                {values.eye
                ?
                <FaEyeSlash />
                :
                <FaEye />
                }
              </div>
          </div>
          <div className='textfield'>
          <div className='textfield'>
            <Alert severity="info">
              Already have an account? <Link to="/login"><span className='loginUp'>Login</span></Link>
            </Alert>
          </div>
          {values.loading
          ?
          <div> 
            <LoadingButton loading variant="outlined">
                Submit
            </LoadingButton>
          </div>
          :
          <Button onClick={handleSubmit} variant="contained">Sign up</Button>
          }
            
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