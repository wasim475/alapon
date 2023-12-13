import { Button } from '@mui/material'
import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Home = () => {
  let navigate = useNavigate()
  const auth = getAuth();

  let handleLogout = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    navigate('/login')
  }
  return (
    <>
      <Button onClick={handleLogout} variant='contained'>Log Out</Button>
    </>
  )
}

export default Home