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
            <Grid container xs={12} sm={12} className='footer-background' >

                <Grid item sm={6} className='n1'>
                    <Typography>Entre em Contato</Typography>

                    

                </Grid>

                <Grid item sm={6} >
                    <Typography>

                    </Typography>
                </Grid>
 

            </Grid>


        </>
    )
}

export default Footer;