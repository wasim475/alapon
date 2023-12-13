import React, { useState } from 'react'
import {TextField, Button} from '@mui/material';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Forgotpassword = () => {
    const auth = getAuth();
    let navigate = useNavigate()

    let [text, setText] = useState('')

    let handleConfirm = ()=>{
        sendPasswordResetEmail(auth, text)
    .then(() => {
        
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
        navigate('/login')
    }
  return (
    <>
    <div className='forgotPassword'>
        <div className='box'>
            <h2>Forgot Password</h2>
            <TextField onChange={(e)=> setText(e.target.value)} className='textField' id="outlined-basic" label="Email" variant="outlined" />
            <Button onClick={handleConfirm} variant="contained">Confirm</Button>

        </div>
    </div>

    </>
  )
}

export default Forgotpassword