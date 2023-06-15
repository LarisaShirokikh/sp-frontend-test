import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LoginPage from "./login";
import RegistrPage from "./register";
import { Box } from "@mui/material";
import { instance } from "../../utils/axios";


const AuthRootComponent: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repiatPassword, setRepiatPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [login, setLogin] = useState('');
  const location = useLocation();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (location.pathname === '/login') {
    const userData = {
      email,
      password
    }
  
    const user = await instance.post('auth/login', userData)
    console.log(user.data)
  } else {
    const userData = {
      firstName: '',
      login: '',
      email: '',
      password: ''
    }
  }
  };
  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
        >
          {
          location.pathname === "/login" ? <LoginPage setEmail={setEmail} setPassword={setPassword} />
           : location.pathname === "/register" 
          ? <RegistrPage setEmail={setEmail} 
          setPassword={setPassword} 
          setRepiatPassword={setRepiatPassword} 
          setFirstName={setFirstName} setLogin={setLogin}/>
           : null
           }
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;
