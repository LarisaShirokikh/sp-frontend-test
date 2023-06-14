import { Button, TextField, Typography } from "@mui/material";
import React from "react";


const RegistrPage = () => {
    
  return (
    <>
    <Typography variant="h2" fontFamily="Popins" textAlign="center">
      Регистрация
    </Typography>
    <Typography
      variant="body1"
      marginBottom={5}
      fontFamily="Popins"
      textAlign="center"
    >
      Введите данные для регистрации
    </Typography>

    <TextField
      fullWidth={true}
      margin="normal"
      label="name"
      variant="outlined"
      placeholder="введите ваше имя"
    />

    <TextField
      fullWidth={true}
      margin="normal"
      label="login"
      variant="outlined"
      placeholder="введите ваш login"
    />

    <TextField
      fullWidth={true}
      margin="normal"
      label="email"
      variant="outlined"
      placeholder="введите ваш email"
    />
    <TextField type='password'
      fullWidth={true}
      margin="normal"
      label="password"
      variant="outlined"
      placeholder="введите ваш пароль"
    />

<TextField type="password"
      fullWidth={true}
      margin="normal"
      label="password"
      variant="outlined"
      placeholder="пароль еще раз"
    />

    <Button
      sx={{ fontFamily: "Popins", marginTop: 2, marginBottom: 2, width: "60%" }} variant="contained">
      Зарегистрироваться
    </Button>
    <Typography variant="body1" sx={{ fontFamily: "Popins" }}>
      У вас уже есть аккаунт?
      <span className="incitingText">Войти</span>
    </Typography>
  </>
  );
};

export default RegistrPage;