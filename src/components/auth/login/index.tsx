import React, { Fragment } from "react";
import { Button, TextField, Typography } from "@mui/material";
//import './style.scss'

const LoginPage = (props: any) => {
  const {setPassword, setEmail} = props
  return (
    <>
      <Typography variant="h2" fontFamily="Popins" textAlign="center">
        Авторизация
      </Typography>
      <Typography
        variant="body1"
        marginBottom={5}
        fontFamily="Popins"
        textAlign="center"
      >
        Чтобы войти в систему, введите email и пароль
      </Typography>

      <TextField
        fullWidth={true}
        margin="normal"
        label="email"
        variant="outlined"
        placeholder="введите ваш email" onChange={(e) => setEmail(e.target.value)}
      />
      <TextField type="password"
        fullWidth={true}
        margin="normal"
        label="password"
        variant="outlined"
        placeholder="введите ваш пароль" onChange={(e) => setPassword(e.target.value)}
      />
      <Button type='submit'
        sx={{ fontFamily: "Popins", marginTop: 2, marginBottom: 2, width: "60%" }} variant="contained">
        Войти
      </Button>
      <Typography variant="body1" sx={{ fontFamily: "Popins" }}>
        У вас нет аккаунта?
        <span className="incitingText">Регистрация</span>
      </Typography>
    </>
  );
};

export default LoginPage;
