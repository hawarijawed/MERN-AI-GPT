import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import CustomizedInput from '../components/shared/CustomizedInput';
import { MdLogin } from "react-icons/md";
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
const Login = () => {
  const auth = useAuth();
  //To handle the form data
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
      //Preventing default behavior
      e.preventDefault();
      //Create form data
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;//to avoid null value as string is used
      const password = formData.get("password") as string;
      //console.log(emal, password)0;
      try {
        toast.loading("Signing in",{id:"login"});
        await auth?.login(email, password);
        toast.success("Signed in successfully",{id:"login"});
      } catch (error) {
        console.log(error);
        toast.error("Signing failure",{id:"login"});
      }
  }
  return (
    <Box width={'100%'} height={'100%'} display={'flex'} flex={1}>
      {/* Box for displaying image, if it is small screen then image will not appear */}
      <Box padding={8} mt={8} display={{ md: "flex", sm: "none", xs: "none" }}>
        <img src="robot.png" alt="Robot" style={{ width: "400px" }} />
      </Box>
      <Box 
        display={"flex"} 
        flex={{xs:1, md:0.5}} 
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
        mt={16}
        ml={"auto"}
      > 
      <form onSubmit={handleSubmit}
      style={
        {
          margin:'auto',
          padding:'30px',
          boxShadow:'10px 10px 20px #000'
        }
      }>
        <Box
        sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
        }}>
          <Typography 
          variant='h4' 
          textAlign={'center'} 
          padding={2} 
          fontWeight={600}>
            Login
          </Typography>
          <CustomizedInput type='email' name='email' label='Email'/>
          <CustomizedInput type='password' name='password' label='Password'/>
          
          <Button type='submit' 
          sx={{
            px:2,
            py:1,
            mt:2,
            width:"400px",
            borderRadius:2,
            bgcolor:"#00fffc",
            ":hover":{
              bgcolor:"white",
              color:"black",
            },
          }}
          // startIcon and endIcon keywords in MUI which specifies the 
          // position of icon
          startIcon = {<MdLogin/>}>
            Login
          </Button>
        </Box>
      </form>
      </Box>
    </Box>
  );
};

export default Login;
