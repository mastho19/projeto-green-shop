import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { TextField, Typography } from "@material-ui/core";

function AtualizarCategoria() {
  return  (
  <>
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      className="fullScreen"
    >
      <Grid sm={6} item className="loginStyle">
        <Typography variant="h3" align="center">
          Categorias
        </Typography>
        <form>
          <TextField
            variant="outlined"
            label="Móvel"
            fullWidth
            margin="normal"
            id="movel"
            name="movel"
          ></TextField>
          <TextField
            variant="outlined"
            label="Ambiente"
            fullWidth
            margin="normal"
            id="ambiente"
            name="ambiente"
          ></TextField>

          <Box textAlign="center">
            <Button variant="outlined" type="submit">
              Enviar
            </Button>
          </Box>
        </form>
      </Grid>
    </Grid>
  </>
)}

export default AtualizarCategoria;
