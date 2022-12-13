import React, { useEffect, useState } from 'react'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './listaCategorias.css';
import {Link, useNavigate} from 'react-router-dom';
import Categoria from '../../../model/Categoria';
import TokenState from '../../../store/tokens/tokenReducer';
import { useSelector } from 'react-redux';
import { busca } from '../../../service/Service';



function ListaCategorias () {
  const [categoria, setCategorias] = useState<Categoria[]>([])
 
  let navigate = useNavigate();
  const token = useSelector<TokenState,TokenState["tokens"]>(
    (state)=>  state.tokens
  )
  useEffect(()=>{
    if(token == ''){
      alert("VocÃª precisa estar logado")
      navigate("/login")
    }
  }, [token])


  async function getCategoria(){
    await busca("/categorias", setCategorias, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(()=>{
    getCategoria()
  }, [categoria.length])

  return (
    <>
    {
      categoria.map(categoria =>(
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Categoria
            </Typography>
            <Typography variant="h5" component="h2">
             {categoria.ambiente}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${categoria.id_categoria}`} className="text-decorator-none">
                <Box mx={1}>
                <Link to= {`/formularioTema/${categoria.id_categoria}`} className="text-decorator-none cursor">
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                  </Link>
                </Box>
              </Link>
              <Link to={`/deletarTema/${categoria.id_categoria}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
  );
}


export default ListaCategorias;