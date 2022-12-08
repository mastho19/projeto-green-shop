import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import "./Produtos.css"
import Mesa from "./mesa.jpg"
import Cart from "./cart.svg"
import { Skeleton } from "@mui/material";


function Produtos(){
return (
<>
<Box className="container">

    <Card className="cardProduto">
      <CardMedia className="fotoCardProduto" component="img" width="100%" image={Mesa} alt="perfil" />
      <CardContent>
        <Typography variant="h5" component="div">Mesa Super Soft</Typography>
        <Typography className="cardCategoria">
          Móveis<strong className="cardPreco">R$590,99</strong>
        </Typography>
      </CardContent>
      <CardActions className="socialPerfil">
        <Button size="small" className="btnComprar">Comprar</Button>
        <Button size="small" className="btnCarrinho">Adicionar <img src={Cart} alt="" /></Button>
      </CardActions>
    </Card> 
    
      {/* COMEÇO DO TESTE */}
    <Card className="cardProduto">
      <CardMedia className="fotoCardProduto" component="img" width="100%" image={Mesa} alt="perfil" />
      <CardContent>
        <Typography variant="h5" component="div">Mesa Super Soft</Typography>
        <Typography className="cardCategoria">
          Móveis<strong className="cardPreco">R$590,99</strong>
        </Typography>
      </CardContent>
      <CardActions className="socialPerfil">
        <Button size="small" className="btnComprar">Comprar</Button>
        <Button size="small" className="btnCarrinho">Adicionar <img src={Cart} alt="" /></Button>
      </CardActions>
    </Card> 
    <Card className="cardProduto">
      <CardMedia className="fotoCardProduto" component="img" width="100%" image={Mesa} alt="perfil" />
      <CardContent>
        <Typography variant="h5" component="div">Mesa Super Soft</Typography>
        <Typography className="cardCategoria">
          Móveis<strong className="cardPreco">R$590,99</strong>
        </Typography>
      </CardContent>
      <CardActions className="socialPerfil">
        <Button size="small" className="btnComprar">Comprar</Button>
        <Button size="small" className="btnCarrinho">Adicionar <img src={Cart} alt="" /></Button>
      </CardActions>
    </Card> 
    <Card className="cardProduto">
      <CardMedia className="fotoCardProduto" component="img" width="100%" image={Mesa} alt="perfil" />
      <CardContent>
        <Typography variant="h5" component="div">Mesa Super Soft</Typography>
        <Typography className="cardCategoria">
          Móveis<strong className="cardPreco">R$590,99</strong>
        </Typography>
      </CardContent>
      <CardActions className="socialPerfil">
        <Button size="small" className="btnComprar">Comprar</Button>
        <Button size="small" className="btnCarrinho">Adicionar <img src={Cart} alt="" /></Button>
      </CardActions>
    </Card> 
    <Card className="cardProduto">
      <CardMedia className="fotoCardProduto" component="img" width="100%" image={Mesa} alt="perfil" />
      <CardContent>
        <Typography variant="h5" component="div">Mesa Super Soft</Typography>
        <Typography className="cardCategoria">
          Móveis<strong className="cardPreco">R$590,99</strong>
        </Typography>
      </CardContent>
      <CardActions className="socialPerfil">
        <Button size="small" className="btnComprar">Comprar</Button>
        <Button size="small" className="btnCarrinho">Adicionar <img src={Cart} alt="" /></Button>
      </CardActions>
    </Card> 
    <Card className="cardProduto">
      <CardMedia className="fotoCardProduto" component="img" width="100%" image={Mesa} alt="perfil" />
      <CardContent>
        <Typography variant="h5" component="div">Mesa Super Soft</Typography>
        <Typography className="cardCategoria">
          Móveis<strong className="cardPreco">R$590,99</strong>
        </Typography>
      </CardContent>
      <CardActions className="socialPerfil">
        <Button size="small" className="btnComprar">Comprar</Button>
        <Button size="small" className="btnCarrinho">Adicionar <img src={Cart} alt="" /></Button>
      </CardActions>
    </Card> 
    <Card className="cardProduto">
      <CardMedia className="fotoCardProduto" component="img" width="100%" image={Mesa} alt="perfil" />
      <CardContent>
        <Typography variant="h5" component="div">Mesa Super Soft</Typography>
        <Typography className="cardCategoria">
          Móveis<strong className="cardPreco">R$590,99</strong>
        </Typography>
      </CardContent>
      <CardActions className="socialPerfil">
        <Button size="small" className="btnComprar">Comprar</Button>
        <Button size="small" className="btnCarrinho">Adicionar <img src={Cart} alt="" /></Button>
      </CardActions>
    </Card> 
    <Card className="cardProduto">
      <CardMedia className="fotoCardProduto" component="img" width="100%" image={Mesa} alt="perfil" />
      <CardContent>
        <Typography variant="h5" component="div">Mesa Super Soft</Typography>
        <Typography className="cardCategoria">
          Móveis<strong className="cardPreco">R$590,99</strong>
        </Typography>
      </CardContent>
      <CardActions className="socialPerfil">
        <Button size="small" className="btnComprar">Comprar</Button>
        <Button size="small" className="btnCarrinho">Adicionar <img src={Cart} alt="" /></Button>
      </CardActions>
    </Card> 
    {/* FIM DO TESTE */}

</Box>
</>
)
}
export default Produtos;
