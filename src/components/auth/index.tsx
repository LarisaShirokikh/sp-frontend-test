import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LoginPage from "./login";
import RegistrPage from "./register";
import { Box } from "@mui/material";
import { instance } from "../../utils/axios";


const AuthRootComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const userData = {
      email,
      password
    }
    const user = await instance.post('auth/login', userData)

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
          {location.pathname === "/login" ? (
            <LoginPage setEmail={setEmail} setPassword={setPassword} />
          ) : location.pathname === "/register" ? (
            <RegistrPage />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;
