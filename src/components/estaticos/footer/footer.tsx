import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './footer.css';

function Footer() {
    return (
        <>
            <Grid className='container' xs={12} sm={12} >

                <Grid className='n1'>
                    <Box className='top' paddingLeft={19}><h3>Entre em Contato</h3></Box>

                    <Box paddingLeft={17} >
                    <input type='text' placeholder='Email'></input>

                    <select>
                        <option>Selecione a categoria</option>

                    </select>

                    <input type='text' placeholder='Mensagem'></input>


                    <button>ENVIAR</button>
                    </Box>

                </Grid>

                <Grid  className='n2'>
                    <Box className='top' paddingLeft={11}><h3>SEGURANÇA</h3></Box>

                    <Box paddingTop={1} >
                        <img src='https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:eco,w_0.5/v1/banner/2021_10_26_19_53_16_4/9e3b990c-9869-4296-a468-d4d25cf971ee-image-88-1.svg' />
                    </Box>

                </Grid>

                <Grid  className='n3' container direction="row" justifyContent="center" alignItems="center">
                    <Box className='top'><h3>REDES SOCIAIS</h3></Box>

                    

                        <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon style={{ fontSize: 40, color: "white" }} className='icones1' />
                        </a>
                    
                    
                        <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon style={{ fontSize: 40, color: "white" }} className='icones2' />
                        </a>

                    
                        <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon style={{ fontSize: 40, color: "white" }} className='icones3' />
                        </a>

                </Grid>

            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#00a470", height: "100%" }} >
                <Grid item xs={12} sm={8}>
                    <Box >
                        <Box paddingTop={2} >
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 GreenShope. Todos os direitos reservados</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default Footer;