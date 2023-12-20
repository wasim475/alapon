import { Button, Grid } from '@mui/material'
import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Group from '../components/Group';
import Friend from '../components/Friend';
import UserList from '../components/UserList';
import FriendRequest from '../components/FriendRequest';


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
      {/* <Button onClick={handleLogout} variant='contained'>Log Out</Button> */}
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Group/>
          <FriendRequest/>
        </Grid>
        <Grid item xs={4}>
          <Friend/>
        </Grid>
        <Grid item xs={4}>
          <UserList/>
        </Grid>
      
      </Grid>
    </>
  )
}

export default Home