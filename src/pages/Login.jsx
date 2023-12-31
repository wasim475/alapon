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

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




let initvalues = {
  email : '',
  password: '',
  eye: false,
  loading : false
}
const Login = () => {

  const notify = (msg) => toast(msg);

  let [error, setError] = useState('')
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
  // if(!email){
  //  setError('Enter your valid email.')
  //  return
  // }
  // if(!password){
  //  setError('Enter your valid password.')
  //   return
  // }
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
      navigate('/alapon/home')
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorCode)
      notify(errorCode)
      setValues({
        ...values,
        password: '',
        loading: false,
      })
      
    });

}
let handleGoogleLogin = ()=>{
  signInWithPopup(auth, provider).then((result) => {
    
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
            {error.includes('auth/invalid-email') && <Alert severity="error">{error.includes('auth/invalid-email')&& 'User not found'}</Alert>}
          </div>
          <div className='textfield'>
            <TextField value={values.password} onChange={handleValues} name='password' id="outlined-basic" label="Password" variant="outlined" type={values.eye? 'text': 'password'} />

            {error.includes('auth/invalid-credential') && <Alert severity="error">{error.includes('auth/invalid-credential')&& 'Invalid password'}</Alert>}
            

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
              <>
                <Button onClick={handleSubmit} variant="contained">Login to Continue</Button>   
              </>
              
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