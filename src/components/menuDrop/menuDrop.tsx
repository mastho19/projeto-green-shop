import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useEffect, useState } from 'react';
import Categoria from '../../model/Categoria';
import { useSelector } from 'react-redux';
import TokenState from '../../store/tokens/tokenReducer';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../service/Service';

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
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )
  let navigate = useNavigate();



  async function getProduto() {
    await busca("/categorias/all", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }
  useEffect(() => {
    getProduto();   
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