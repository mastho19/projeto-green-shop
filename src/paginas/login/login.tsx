import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { ChangeEvent, useState, useEffect } from "react";
import useLocalStorage from 'react-use-localstorage'
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from "../../model/userLogin";
import { login } from '../../service/Service'
import "./login.css";

function Login() {






  const [usuario, setUsuario] = useState<String>('')
  const [erroUsuario, setErroUsuario] = useState<String>('')


  const [senha, setSenha] = useState<String>('')
  const [erroSenha, setErroSenha] = useState<String>('')

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (usuario.length < 3) {
      setErroUsuario('erro')
    }
    console.log(usuario)

    if (senha.length < 5) {
      setErroSenha('erro')
    }
    console.log(senha)


  }





  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id_usuario: 0,
      nome: '',
      usuario: '',
      foto: '',
      senha: '',
      token: '',
    }
  )

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (token != '') {
      navigate('/home')
    }
  }, [token])


  // try{
  //     await login(`/auth/logar`, userLogin, setToken)

  //     alert('Usuário logado com sucesso!');
  // }catch(error){
  //     alert('Dados do usuário inconsistentes. Erro ao logar!');
  // }





  return (
    <>
      <Grid container justifyContent="center" alignContent="center" className="fullScreen">
        <Grid sm={6} item className="loginStyle">
          <Typography variant="h3" align="center">Entrar</Typography>
          <form onSubmit={onSubmit}>
            <TextField

              variant="outlined"
              label="Usuário"
              fullWidth
              margin="normal"
              id="usuario"
              name='usuario'
              value={userLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
            >

            </TextField>
            <Box className=" text-red" id="erroUsuario">{erroUsuario}</Box>
            <TextField

              variant="outlined"
              label="Senha"
              fullWidth
              margin="normal"
              id="Senha"
              name='senha'
              type='password'
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
            >

            </TextField>
            <Box className=" text-red" id="erroSenha">{erroSenha}</Box>


            <Box textAlign="center">

              <Button variant="outlined" type="submit">Enviar</Button>
            </Box>
          </form>
          <Box className="flex">
            <Typography>Não tem cadastro ?</Typography>
            <Link to='/cadastro' className="linkStyle">
              <Typography>Cadastre-se !</Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;