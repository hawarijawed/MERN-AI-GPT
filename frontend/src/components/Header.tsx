import { AppBar, Toolbar } from '@mui/material'
import Logo from './shared/Logo'
import NavLinks from './shared/NavLinks';
import { useAuth } from '../context/AuthContext';
//import React from 'react';

const Header = () => {
  const auth = useAuth();
  return (
  <AppBar
  sx={{bgcolor:"transparent",position:"static", boxShadow:"none"}}>
    <Toolbar sx={{display:"flex"}}>
     <Logo />
     <div style={{display:'flex'}}>
      {auth?.isLoggedIn?
      (<>
        <NavLinks 
        bg="#00fffc"
        to='/chat'
        text='Go to Chat'
        textcolor='black'
        />
        <NavLinks 
        bg='#51538f'
        textcolor='white'
        to='/'
        text='logout'
        onClick={auth.logout}
        />
      </>)
      :(
      <>
      <NavLinks 
        bg="#00fffc"
        to='/login'
        text='login'
        textcolor='black'
        />
        <NavLinks 
        bg='#51538f'
        textcolor='white'
        to='/signup'
        text='Signup'
        />
      </>)
      }
     </div>
    </Toolbar>
  </AppBar>
  )
}

export default Header

