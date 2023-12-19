import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import profile from '../assets/profile.png'
import { IoMdHome ,IoMdNotificationsOutline  } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { AiTwotoneMessage  } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";

const RootLayout = () => {
  return (
    <>
    <Grid container spacing={2}>
  <Grid item xs={1}>
        <div className='Navbar'>
            <div className='navContianer'>
                <img className='profilePic' src={profile}/>
                <ul>
                    <li>
                        <Link to='/alapon/home'>
                            <IoMdHome className='icons' />
                        </Link>
                    </li>

                    <li>
                        <Link to='/alapon/msg'>
                            <AiTwotoneMessage className='icons' />
                        </Link>
                    </li>

                    <li>
                        <Link to='/alapon/notifications'>
                         <IoMdNotificationsOutline className='icons'/>
                        </Link>
                    </li>

                    <li>
                        <Link to='/alapon/settings'>
                             <IoSettingsOutline className='icons'/>
                        </Link>
                    </li>

                    <li>
                    <TbLogout className='icons'/>
                    </li>
                    
                </ul>
            </div>
        </div> 
  </Grid>
  <Grid item xs={11}>
        <Outlet/>
  </Grid>
</Grid>
    </>
  )
}

export default RootLayout