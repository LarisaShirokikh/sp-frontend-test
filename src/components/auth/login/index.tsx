import React from "react";
import Greting from "./Greting";

const LoginPage = () => {
    const name = 'Alex'
  return (
    <div>
      <h1>Login page</h1>
      <Greting name={name}/>
    </div>
  );
};

export default LoginPage;
