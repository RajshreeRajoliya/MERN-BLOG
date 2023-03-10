import React from 'react'
import { useState } from 'react';

import {Box,TextField,Button,styled,Typography} from '@mui/material';

const Component = styled(Box)`
width: 400px;
margin: auto;
box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`
const Image = styled('img')({
    width: 100,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0'
})

const Wrapper = styled(Box)`
padding: 25px 35px;
display: flex;
flex: 1;
flex-direction: column;
& > div , & > button , & > p{
    margin-top: 20px;
}
`

const Loginbutton = styled(Button)`
text-transform: none;
background: #FB641B;
color: #fff;
height: 48px;
border-radius: 2px;
`

const Signupbutton = styled(Button)`
text-transform: none;
background: #fff;
color: #2874f0;
height: 48px;
border-radius: 2px;
box-shadow: 0px 2px 4px 0 rgb(0 0 0/ 20%)
`
const Text = styled(Typography)`
color: #878787;
font-size: 16px;
`

const Login = () =>{
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const[account,toggleAccount] = useState('login');

 const toggleSignUp = () =>{
  account === 'signUp' ? toggleAccount('login') : toggleAccount('signUp')
    }

    return(
        <Component > 
        <Box>
        <Image src={imageURL} alt ="login" />
        {
            account === 'login' ?

            <Wrapper>
          <TextField variant="standard" label = "Enter username"/>
          <TextField variant="standard" label = "Enter password"/>
<Loginbutton variant="contained">Login</Loginbutton>
<Text style={{textAlign : 'center'}}>OR</Text>
<Signupbutton onClick={()=>toggleSignUp()}>Create an account</Signupbutton>
          </Wrapper>  :

          <Wrapper>
          <TextField variant="standard" label = "Enter Name"/>
          <TextField variant="standard" label = "Enter Username"/>
          <TextField variant="standard" label = "Enter Password"/>

<Signupbutton>Signup</Signupbutton>
<Text style={{textAlign : 'center'}}>OR</Text>
<Loginbutton variant="contained" onClick={()=>toggleSignUp()}>Already have an account?</Loginbutton>

          </Wrapper>
        }
          

         
        </Box>
        </Component >
    )
}
export default Login;