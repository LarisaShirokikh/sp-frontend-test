import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { IPropsRegister } from "../../../common/types/auth";


const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const {setEmail, setPassword, setRepiatPassword, setFirstName, setLogin} = props
  return (
    <>
    <Typography variant="h2" fontFamily="Poppins" textAlign="center">
      Регистрация
    </Typography>
    <Typography variant="body1" marginBottom={5} fontFamily="Poppins" textAlign="center">
      Введите данные для регистрации
    </Typography>

    <TextField
      fullWidth={true}
      margin="normal"
      label="name"
      variant="outlined"
      placeholder="введите ваше имя" onChange={(e) => setFirstName(e.target.value) }/>

    <TextField
      fullWidth={true}
      margin="normal"
      label="login"
      variant="outlined"
      placeholder="введите ваш login" onChange={(e) => setLogin(e.target.value) }
    />

    <TextField
      fullWidth={true}
      margin="normal"
      label="email"
      variant="outlined"
      placeholder="введите ваш email" onChange={(e) => setEmail(e.target.value) }
    />
    <TextField type='password'
      fullWidth={true}
      margin="normal"
      label="password"
      variant="outlined"
      placeholder="введите ваш пароль" onChange={(e) => setPassword(e.target.value) }
    />

<TextField type="password"
      fullWidth={true}
      margin="normal"
      label="password"
      variant="outlined"
      placeholder="пароль еще раз" onChange={(e) => setRepiatPassword(e.target.value) }
    />

    <Button type='submit' sx={{ fontFamily: "Poppins", marginTop: 2, marginBottom: 2, width: "60%" }} variant="contained">
      Зарегистрироваться
    </Button>
    <Typography variant="body1" sx={{ fontFamily: "Poppins" }}>
      У вас уже есть аккаунт? <span className="incitingText">Войти</span>
    </Typography>
  </>
  );
};

export default RegisterPage;