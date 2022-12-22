import { Button, Grid, Link, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import "./sobreNos.css";

import Ronaldo from "./img/Ronaldo.png";
import Raquel from "./img/Raquel.png";
import Thomas from "./img/Thomas.png";
import Lucas from "./img/Lucas.png";
import Ivan from "./img/Ivan.png";
import Rejane from "./img/Rejane.png";
import Rodrigo from "./img/Rodrigo.png";
import Linkedin from "./img/linkedin-card.svg"
import Github from "./img/github-card.svg"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


function SobreNos() {

  return (
    <>
      <Grid container className="containerSN2">
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
        <ul className="ul-cards2">
            <li className="li-cards2">
              <Box className="boxPerfil2">

                <Card sx={{ maxWidth: 345 }} className="card3 card-body2">
                  <CardMedia className="fotoCard2" component="img" width="100%" image={Thomas} alt="perfil" />
                  <div className="bordaCard">
                  <CardContent>
                    <Typography variant="h5" component="div">Thomás Almeida</Typography>
                  </CardContent>
                  <ul>
                    <li className="logo-redes">
                      <Link rel="stylesheet" href="https://github.com/mastho19" target="_blank" ><img src={Github} width='35px' alt="Logo Github" /></Link>
                    </li>
                    <li className="logo-redes">
                      <Link rel="stylesheet" href="https://www.linkedin.com/in/thomas-almeida-de-sousa/" target="_blank" ><img src={Linkedin} width='35px' alt="Logo Linkedin" /></Link>
                    </li>
                  </ul>
                  </div>
                </Card>
              </Box>
            </li>
            <li className="li-cards2">
              <Box className="boxPerfil2">

                <Card sx={{ maxWidth: 345 }} className="card3 card-body2">
                  <CardMedia className="fotoCard2" component="img" width="100%" image={Raquel} alt="perfil" />
                  <div className="bordaCard">
                  <CardContent>
                    <Typography variant="h5" component="div">Raquel Resende</Typography>
                  </CardContent>
                  <ul>
                    <li className="logo-redes">
                      <Link rel="stylesheet" href="https://github.com/RaquelResende" target="_blank" ><img src={Github} width='35px' alt="Logo Github" /></Link>
                    </li>
                    <li className="logo-redes">
                      <Link rel="stylesheet" href="https://www.linkedin.com/in/raquelpintoresende/" target="_blank" ><img src={Linkedin} width='35px' alt="Logo Linkedin" /></Link>
                    </li>
                  </ul>
                  </div>
                </Card>
              </Box>
            </li>
            <li className="li-cards2">
              <Box className="boxPerfil2">

                <Card sx={{ maxWidth: 345 }} className="card3 card-body2">
                  <CardMedia className="fotoCard2" component="img" width="100%" image={Rodrigo} alt="perfil" />
                  <div className="bordaCard">
                  <CardContent>
                    <Typography variant="h5" component="div">Rodrigo Eufrasio</Typography>
                  </CardContent>
                  <ul>
                    <li className="logo-redes">
                      <Link rel="stylesheet" href="https://github.com/Spyke27" target="_blank" ><img src={Github} width='35px' alt="Logo Github" /></Link>
                    </li>
                    <li className="logo-redes">
                      <Link rel="stylesheet" href="https://www.linkedin.com/in/rodrigo-daniell/" target="_blank" ><img src={Linkedin} width='35px' alt="Logo Linkedin" /></Link>
                    </li>
                  </ul>
                  </div>
                </Card>
              </Box>
            </li>
            <li className="li-cards2">
              <Box className="boxPerfil2">

                <Card sx={{ maxWidth: 345 }} className="card3 card-body2">
                  <CardMedia className="fotoCard2" component="img" width="100%" image={Ronaldo} alt="perfil" />
                  <div className="bordaCard">
                  <CardContent>
                    <Typography variant="h5" component="div">Ronaldo Freire</Typography>
                  </CardContent>
                  <ul>
                    <li className="logo-redes">
                      <Link rel="stylesheet" href="https://github.com/Ronald0Freire" target="_blank" ><img src={Github} width='35px' alt="Logo Github" /></Link>
                    </li>
                    <li className="logo-redes">
                      <Link rel="stylesheet" href="https://www.linkedin.com/in/ronaldo-freire/" target="_blank" ><img src={Linkedin} width='35px' alt="Logo Linkedin" /></Link>
                    </li>
                  </ul>
                  </div>
                </Card>
              </Box>
            </li>
            <li className="li-cards2">
              <Box className="boxPerfil2">

                <Card sx={{ maxWidth: 345 }} className="card3 card-body2">
                  <CardMedia className="fotoCard2" component="img" width="100%" image={Lucas} alt="perfil" />
                  <div className="bordaCard">
                  <CardContent>
                    <Typography variant="h5" component="div">Lucas El Honais</Typography>
                  </CardContent>
                  <ul>
                    <li className="logo-redes">
                      <Link rel="stylesheet" href="https://github.com/LucasMarques97" target="_blank" ><img src={Github} width='35px' alt="Logo Github" /></Link>
                    </li>
                    <li className="logo-redes">
                      <Link rel="stylesheet" href="https://www.linkedin.com" target="_blank" ><img src={Linkedin} width='35px' alt="Logo Linkedin" /></Link>
                    </li>
                  </ul>
                  </div>
                </Card>
              </Box>
            </li>
            <li className="li-cards2">
              <Box className="boxPerfil2">

                <Card sx={{ maxWidth: 345 }} className="card3 card-body2">
                  <CardMedia className="fotoCard2" component="img" width="100%" image={Ivan} alt="perfil" />
                  <div className="bordaCard">
                  <CardContent>
                    <Typography variant="h5" component="div">José Ivanilson</Typography>
                  </CardContent>
                  <ul>
                    <li className="logo-redes">
                      <Link rel="stylesheet" href="https://github.com/ivanilsonsillva" target="_blank" ><img src={Github} width='35px' alt="Logo Github" /></Link>
                    </li>
                    <li className="logo-redes">
                      <Link rel="stylesheet" href="https://www.linkedin.com/in/ivanilson-sillva/" target="_blank" ><img src={Linkedin} width='35px' alt="Logo Linkedin" /></Link>
                    </li>
                  </ul>
                  </div>
                </Card>
              </Box>
            </li>
            <li className="li-cards2">
              <Box className="boxPerfil2">

                <Card sx={{ maxWidth: 345 }} className="card3 card-body2">
                  <CardMedia className="fotoCard2" component="img" width="100%" image={Rejane} alt="perfil" />
                  <div className="bordaCard">
                  <CardContent>
                    <Typography variant="h5" component="div">Rejane Queiroz</Typography>
                  </CardContent>
                  <ul>
                    <li className="logo-redes">
                      <Link rel="stylesheet" href="https://github.com/rejanequeiroz" target="_blank" ><img src={Github} width='35px' alt="Logo Github" /></Link>
                    </li>
                    <li className="logo-redes">
                      <Link rel="stylesheet" href="https://www.linkedin.com/in/reijane-queiroz/" target="_blank" ><img src={Linkedin} width='35px' alt="Logo Linkedin" /></Link>
                    </li>
                  </ul>
                  </div>
                </Card>
              </Box>
            </li>
        </ul>
      </section>
    </>
  );
}


export default SobreNos;