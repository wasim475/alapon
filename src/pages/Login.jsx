import React, { useState } from 'react'
import {Grid,TextField, Button, Alert} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import regImg from '../assets/registration.png'
import googleImg from '../assets/google.png'
import Headingforreglog from '../components/Headingforreglog';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';




let initvalues = {
  email : '',
  password: '',
  eye: false,
  loading : false
}
const Login = () => {
  let navigate = useNavigate()
  const auth = getAuth()
  const provider = new GoogleAuthProvider();
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
  signInWithEmailAndPassword(auth, email, password).then((user)=>{
      setValues({
        ...values,
        email: '',
        password: '',
        loading: false
      })
      navigate('/home')
    })

}
let handleGoogleLogin = ()=>{
  signInWithPopup(auth, provider).then((result) => {
    console.log(result);
  })
}
  return (
    <>
    <Grid container spacing={2}>
        <Grid item xs={6}>
         <div className='regContainer'>
          <div className='regInfo'>
          <Headingforreglog className='cssforReg' Title='Login to your account!'/>
          <img onClick={handleGoogleLogin} className='googleImg' src={googleImg}/>
          </div>
          <div className='textfield'>
            <TextField value={values.email} onChange={handleValues} name='email' id="outlined-basic" label="Email Address" variant="outlined" type='email' placeholder='urmi21riddhi@example.com'/>
          </div>
          <div className='textfield'>
            <TextField value={values.password} onChange={handleValues} name='password' id="outlined-basic" label="Password" variant="outlined" type={values.eye? 'text': 'password'} />
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
              Already have an account? <Link to="/"><span className='loginUp'>Registration</span></Link>
            </Alert>
          </div>
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

          <div>
          <Alert severity="error">Forgot password? <Link to='/forgotpassword'>Reset</Link></Alert>
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