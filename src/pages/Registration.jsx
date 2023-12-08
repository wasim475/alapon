import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Grid,TextField, Button} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import regImg from '../assets/registration.png'
import Headingforreglog from '../components/Headingforreglog';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


let initvalues = {
  email : '',
  fullName: '',
  password: '',
  loading : false
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
        loading: false
    })
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
          </div>
          <div className='textfield'>
            <TextField value={values.fullName} onChange={handleValues} name='fullName' id="outlined-basic" label="Ful name" variant="outlined" placeholder='Urmi Riddhi'/>
          </div>
          <div className='textfield'>
            <TextField value={values.password} onChange={handleValues} name='password' id="outlined-basic" label="Password" variant="outlined" type='password' />
          </div>
          <div className='textfield'>
          {values.loading
          ?
          <LoadingButton loading variant="outlined">
              Submit
          </LoadingButton>
          :
          <Button onClick={handleSubmit} variant="contained">Sign up</Button>
          }
            
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