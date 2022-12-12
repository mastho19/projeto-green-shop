import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useEffect, useState } from 'react';
import Categoria from '../../model/Categoria';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../service/Service';
import useLocalStorage from 'react-use-localstorage';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [token, setToken] = useLocalStorage('token')
  let navigate = useNavigate();



  async function getCategoria() {
    await busca("/categorias/all", setCategorias, {
      headers: {
        'Authorization': token
      },
    });
  }
  useEffect(() => {
    getCategoria();   
  }, [categorias.length]);

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Categorias
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {categorias.map((categoria) => (
        <MenuItem onClick={handleClose}>{categoria.ambiente}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}