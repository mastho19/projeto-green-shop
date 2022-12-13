import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Theme,
  Typography,
  makeStyles,
  createStyles
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Produtos.css";
import Mesa from "./mesa.jpg";
import Cart from "./cart.svg";
import { useSelector } from "react-redux";
import TokenState from "../../../store/tokens/tokenReducer";
import { Link, useNavigate } from "react-router-dom";
import Produtos from "../../../model/Produto";
import CloseIcon from '@material-ui/icons/Close';
import Modal from '@material-ui/core/Modal';
import { busca } from "../../../service/Service";

function ListarProdutos() {
  const [produtos, setProdutos] = useState<Produtos[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado!");
      navigate("/login");
    }
  }, [token]);

  async function getProduto() {
    await busca("/produtos/all", setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }
  useEffect(() => {
    getProduto();
  }, [produtos.length]);
  
  return (
    <>
      <Link to="/produtos/cadastrar" className="text-decorator-none">
        <Button
          variant="contained"
          color="secondary"
          className="btnAdicionarProduto"
        >
          Novo Produto
        </Button>
      </Link>

      <Link to="/produtos/cadastrar" className="text-decorator-none">
        <Button
          variant="contained"
          color="secondary"
          className="btnAdicionarProduto"
        >
          Nova Categoria
        </Button>
      </Link>

      <Box className="container">
        {produtos.map((produto) => (
          <Link to="">
            <Card className="cardProduto">
              <CardMedia
                className="fotoCardProduto"
                component="img"
                width="100%"
                image={Mesa}
                alt="perfil"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {produto.nome}
                </Typography>
                <Typography className="cardCategoria">
                  {produto.descricao}
                  <strong className="cardPreco">{produto.valor}</strong>
                </Typography>
              </CardContent>
              <CardActions className="socialPerfil">
                <Button size="small" className="btnComprar">
                  Comprar
                </Button>
                <Button size="small" className="btnCarrinho">
                  Adicionar <img src={Cart} alt="" />
                </Button>
              </CardActions>
            </Card>
          </Link>
        ))}
      </Box>
    </>
  );
}
export default ListarProdutos;
