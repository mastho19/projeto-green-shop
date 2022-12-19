import { Button, Grid, Link, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import "./sobreNos.css";

import FotoPerfil from "./img/perfil.jpg";
import Linkedin from "./img/linkedin-card.svg"
import Github from "./img/github-card.svg"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


function SobreNos() {

  return (
    <>
      <Grid container className="containerSN">
        <Grid item sm={6}>
          <div className="margin-text">
            <Typography variant="h3" className="sobreProjeto">sobre o projeto</Typography>
            <div className="barrinha2"></div>
            <Typography>
              Cidades e comunidades sustentáveis. Problema social a ser trabalhado: O consumo e descarte de produtos sem sua devida reciclagem e reutilização, Impacto e consequências dele na sociedade: Excesso de poluição e lixos urbanos, que acabam acarretando problemas como enchentes, rios poluídos e altos níveis de carbono na atmosfera. A solução escolhida: Criar um e-commerce que comercializa e incentiva o consumo de produtos recicláveis e sustentáveis. Motivo da escolha do modelo de app: Influenciar e gerar retornos para produtos recicláveis, fomentando o desenvolvimento sustentável em áreas urbanas. Descrever o software planejado para solucionar este problema: Um E-commerce que não contenha apenas produtos à venda, mas também campanhas conscientizantes sobre a causa. Um tipo de produto no modelo E-Commerce: Objetos decorativos e móveis feitos com materiais reciclados
            </Typography>
          </div>
        </Grid>
        <Grid item sm={6}>
          <img
            src="https://reciclaje.com.co/wp-content/uploads/2018/03/Destacada-reciclador-asociado.jpg"
            alt="imagem1"
            className="imagem-sobreNos"
          />
        </Grid>
      </Grid>

      <Box className="desenvolvedores">
        <Typography variant="h4" className="textDesenvolvedores ">equipe desenvolvedora</Typography>
      </Box>

      <section>
        <ul className="ul-cards">
          <li className="li-cards">
            <Box className="boxPerfil">

              <Card sx={{ maxWidth: 345 }} className="card2 card-body">
                <CardMedia className="fotoCard" component="img" width="100%" image={FotoPerfil} alt="perfil" />
                <CardContent>
                  <Typography variant="h5" component="div">Ronaldo</Typography>
                </CardContent>
                <ul>
                  <li className="logo-redes">
                    <Link rel="stylesheet" href="https://www.github.com" target="_blank" ><img src={Github} width='35px' alt="Logo Github" /></Link>
                  </li>
                  <li className="logo-redes">
                    <Link rel="stylesheet" href="https://www.linkedin.com" target="_blank" ><img src={Linkedin} width='35px' alt="Logo Linkedin" /></Link>
                  </li>
                </ul>
              </Card>
            </Box>
          </li>
          <li className="li-cards">
            <Box className="boxPerfil">

              <Card sx={{ maxWidth: 345 }} className="card2 card-body">
                <CardMedia className="fotoCard" component="img" width="100%" image={FotoPerfil} alt="perfil" />
                <CardContent>
                  <Typography variant="h5" component="div">Rodrigo</Typography>
                </CardContent>
                <ul>
                  <li className="logo-redes">
                    <Link rel="stylesheet" href="https://www.github.com" target="_blank" ><img src={Github} width='35px' alt="Logo Github" /></Link>
                  </li>
                  <li className="logo-redes">
                    <Link rel="stylesheet" href="https://www.linkedin.com" target="_blank" ><img src={Linkedin} width='35px' alt="Logo Linkedin" /></Link>
                  </li>
                </ul>
              </Card>
            </Box>
          </li>
          <li className="li-cards">
            <Box className="boxPerfil">

              <Card sx={{ maxWidth: 345 }} className="card2 card-body">
                <CardMedia className="fotoCard" component="img" width="100%" image={FotoPerfil} alt="perfil" />
                <CardContent>
                  <Typography variant="h5" component="div">Raquel</Typography>
                </CardContent>
                <ul>
                  <li className="logo-redes">
                    <Link rel="stylesheet" href="https://www.github.com" target="_blank" ><img src={Github} width='35px' alt="Logo Github" /></Link>
                  </li>
                  <li className="logo-redes">
                    <Link rel="stylesheet" href="https://www.linkedin.com" target="_blank" ><img src={Linkedin} width='35px' alt="Logo Linkedin" /></Link>
                  </li>
                </ul>
              </Card>
            </Box>
          </li>
          <li className="li-cards">
            <Box className="boxPerfil">
              <Card sx={{ maxWidth: 345 }} className="card2 card-body">
                <CardMedia className="fotoCard" component="img" width="100%" image={FotoPerfil} alt="perfil" />
                <CardContent>
                  <Typography variant="h5" component="div">Thomas</Typography>
                </CardContent>
                <ul>
                  <li className="logo-redes">
                    <Link rel="stylesheet" href="https://www.github.com" target="_blank" ><img src={Github} width='35px' alt="Logo Github" /></Link>
                  </li>
                  <li className="logo-redes">
                    <Link rel="stylesheet" href="https://www.linkedin.com" target="_blank" ><img src={Linkedin} width='35px' alt="Logo Linkedin" /></Link>
                  </li>
                </ul>
              </Card>
            </Box>
          </li>
          <li className="li-cards">
            <Box className="boxPerfil">

              <Card sx={{ maxWidth: 345 }} className="card2 card-body">
                <CardMedia className="fotoCard" component="img" width="100%" image={FotoPerfil} alt="perfil" />
                <CardContent>
                  <Typography variant="h5" component="div">Rejane</Typography>
                </CardContent>
                <ul>
                  <li className="logo-redes">
                    <Link rel="stylesheet" href="https://www.github.com" target="_blank" ><img src={Github} width='35px' alt="Logo Github" /></Link>
                  </li>
                  <li className="logo-redes">
                    <Link rel="stylesheet" href="https://www.linkedin.com" target="_blank" ><img src={Linkedin} width='35px' alt="Logo Linkedin" /></Link>
                  </li>
                </ul>
              </Card>
            </Box>
          </li>
          <li className="li-cards">
            <Box className="boxPerfil">

              <Card sx={{ maxWidth: 345 }} className="card2 card-body">
                <CardMedia className="fotoCard" component="img" width="100%" image={FotoPerfil} alt="perfil" />
                <CardContent>
                  <Typography variant="h5" component="div">Lucas</Typography>
                </CardContent>
                <ul>
                  <li className="logo-redes">
                    <Link rel="stylesheet" href="https://www.github.com" target="_blank" ><img src={Github} width='35px' alt="Logo Github" /></Link>
                  </li>
                  <li className="logo-redes">
                    <Link rel="stylesheet" href="https://www.linkedin.com" target="_blank" ><img src={Linkedin} width='35px' alt="Logo Linkedin" /></Link>
                  </li>
                </ul>
              </Card>
            </Box>
          </li>
          <li className="li-cards">
            <Box className="boxPerfil">

              <Card sx={{ maxWidth: 345 }} className="card2 card-body">
                <CardMedia className="fotoCard" component="img" width="100%" image={FotoPerfil} alt="perfil" />
                <CardContent>
                  <Typography variant="h5" component="div">Ivan</Typography>
                </CardContent>
                <ul>
                  <li className="logo-redes">
                    <Link rel="stylesheet" href="https://www.github.com" target="_blank" ><img src={Github} width='35px' alt="Logo Github" /></Link>
                  </li>
                  <li className="logo-redes">
                    <Link rel="stylesheet" href="https://www.linkedin.com" target="_blank" ><img src={Linkedin} width='35px' alt="Logo Linkedin" /></Link>
                  </li>
                </ul>
              </Card>
            </Box>
          </li>
        </ul>
      </section>
    </>
  );
}


export default SobreNos;