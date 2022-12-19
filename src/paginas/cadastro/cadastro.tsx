import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./cadastro.css";
import { cadastroUsuario } from "../../service/Service";
import User from "../../model/User";

function Cadastro() {


  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("")
  const [user, setUser] = useState<User>(
    {
      id_usuario: 0,
      nome: '',
      usuario: '',
      foto: '',
      senha: ''
    })

  const [userResult, setUserResult] = useState<User>(
    {
      id_usuario: 0,
      nome: '',
      usuario: '',
      foto: '',
      senha: ''
    })

  useEffect(() => {
    if (userResult.id_usuario != 0) {
      navigate("/login")
    }
  }, [userResult])


  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }


  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const [nome] = useState<String>('')
  const [erroNome, setErroNome] = useState<String>('')


  const [usuario] = useState<String>('')
  const [erroUsuario, setErroUsuario] = useState<String>('')


  const [senha] = useState<String>('')
  const [erroSenha, setErroSenha] = useState<String>('')


  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (user.nome.length < 5) {
      setErroNome('erro')
    } else {
      setErroNome('')
    }
    console.log(nome)


    if (user.usuario.length < 3) {
      setErroUsuario('erro')
    } else {
      setErroUsuario('')
    }
    console.log(usuario)

    if (user.senha.length < 5) {
      setErroSenha('erro')
    } else {
      setErroSenha('')

    }
    console.log(senha)

    if (confirmarSenha == user.senha) {
      try{
        await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert('Usuario cadastrado com sucesso')
      }catch (error){
        alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
      }

    } else {
      alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
    }

  }



  return (
    <>
      <Grid container justifyContent="center" alignContent="center" className="fullScreen">
        <Grid sm={6} item className="loginStyle">
          <Typography variant="h3" align="center">Cadastre-se</Typography>
          <form onSubmit={onSubmit}>
            <TextField
              variant="outlined"
              label="Nome"
              fullWidth
              margin="normal"
              id="nome"
              name='nome'
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
            >
            </TextField>
            <Box className=" text-red" id="erroNome">{erroNome}</Box>


            <TextField
              variant="outlined"
              label="E-mail"
              fullWidth
              margin="normal"
              id="usuario"
              type='email'
              name='usuario'
              value={user.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
            >
            </TextField>
            <Box className=" text-red" id="erroUsuario">{erroUsuario}</Box>

            <TextField
              variant="outlined"
              label="Senha"
              fullWidth
              margin="normal"
              id="senha"
              type='password'
              name='senha'
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
            >
            </TextField>

            <Box className=" text-red" id="erroSenha">{erroSenha}</Box>

            {/* <Box className=""></Box> */}

            <TextField
              variant="outlined"
              label="Confirmar Senha"
              fullWidth
              margin="normal"
              id="senha"
              type='password'
              name='senha'
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
            >
            </TextField>

            <Box className=" text-red" id="erroSenha">{erroSenha}</Box>

            <Box display='flex' textAlign="center" justifyContent='space-around' mt={3}>

              <Button variant="contained" color="primary" type="submit">Cadastrar</Button>

            </Box>
          </form>
        </Grid>
      </Grid>



    </>
  )
}

export default Cadastro;