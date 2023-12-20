import React from 'react'
import { Outlet, Link, useLocation  } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import profile from '../assets/profile.png'
import { IoMdHome ,IoMdNotificationsOutline  } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { AiTwotoneMessage  } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";

const RootLayout = () => {
    let location = useLocation();
    console.log(location.pathname);
  return (
    <>
    <Grid container spacing={2}>
  <Grid item xs={1}>
        <div className='Navbar'>
            <div className='navContianer'>
                <img className='profilePic' src={profile}/>
                <ul>
                    <li>
                        <Link to='/alapon/home' className={location.pathname== '/alapon/home'? 'active': 'icons'}>
                            <IoMdHome  />
                        </Link>
                    </li>

                    <li>
                        <Link to='/alapon/msg' className={location.pathname== '/alapon/msg'? 'active': 'icons'}>
                            <AiTwotoneMessage />
                        </Link>
                    </li>

                    <li>
                        <Link to='/alapon/notifications' className={location.pathname== '/alapon/notifications'? 'active': 'icons'}>
                         <IoMdNotificationsOutline/>
                        </Link>
                    </li>

                    <li>
                        <Link to='/alapon/settings' className={location.pathname== '/alapon/settings'? 'active': 'icons'}>
                             <IoSettingsOutline/>
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