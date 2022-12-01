import React from 'react';
import logo from './logo.svg';
import Login from './components/login/login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SobreNos from './components/sobreNos/sobreNos';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/estaticos/footer/footer';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/sobre-nos' element={<SobreNos/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
