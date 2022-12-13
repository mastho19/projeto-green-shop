import React from 'react';
import Login from './paginas/login/login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SobreNos from './paginas/sobreNos/sobreNos';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/estaticos/footer/footer';
import Cadastro from './paginas/cadastro/cadastro';
import { Provider } from 'react-redux';
import store from './store/store';
import CadastroProduto from './paginas/cadastroProdutos/cadastroProdutos';
import Produtos from './paginas/produtos/listarProdutos/Produtos';
import AtualizarCategoria from './components/categorias/atualizarCategoria/atualizarCategoria';
import ListaCategorias from './paginas/categorias/listaCategorias/listaCategorias';






function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/sobre-nos' element={<SobreNos/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/produtos/all' element={<Produtos/>}/>
          <Route path='/cadastrar/produtos' element={<CadastroProduto/>}/>
          <Route path='/cadastrar/categoria' element={<AtualizarCategoria/>}/>
          <Route path='/categorias' element={<ListaCategorias/>}/>
        </Routes>
        <Footer/>
      </Router>
      </Provider>
    </>
  )
}

export default App;
