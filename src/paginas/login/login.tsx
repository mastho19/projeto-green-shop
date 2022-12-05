import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { Link } from 'react-router-dom';
import "./login.css";
function Login() {

  let UsuarioOK = false
  
  

  const [usuario, setUsuario] = useState<String>('')
  const [erroUsuario, setErroUsuario] = useState<String>('')

  function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if(usuario.length < 3){
      setErroUsuario('erro')
    }
    console.log(usuario)
  }

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
              id="Usuario"
              value={usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setUsuario(e.target.value)
              }}>

            </TextField>
            <div className=" text-red" id="erroUsuario">{erroUsuario}</div>
            <TextField

              variant="outlined"
              label="Senha"
              fullWidth
              margin="normal"
              id="Senha"

            >
            </TextField>
            <Box className=" text-red" id="erroPassword"></Box>

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
