import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import "./sobreNos.css";

function SobreNos() {
  return (
    <>
      <Grid container>
        <Grid item sm={6}>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            tempore iure hic cum voluptate? Odio laborum vel numquam nostrum
            totam. Temporibus numquam aliquid distinctio id vero recusandae
            magni quia sequi. Vitae, non adipisci aut expedita eos rem
            consequatur quisquam sequi sint ducimus fuga obcaecati, harum earum
            accusantium! Rem enim nesciunt quae labore officia consequuntur
            quisquam dolor assumenda consequatur? In, ratione?
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <img
            src="https://reciclaje.com.co/wp-content/uploads/2018/03/Destacada-reciclador-asociado.jpg"
            alt=""
            className="imagem"
          />
        </Grid>
      </Grid>
      <Box></Box>
    </>
  );
}

export default SobreNos;
