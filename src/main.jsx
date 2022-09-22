import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import UsuarioProvider from './common/Usuario';
import { GlobalStyle } from './GlobalStyle';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Search from './pages/search/Search';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UsuarioProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route element={<App />}>
            <Route path='/inicio' element={<Home />} />
            <Route path='search' element={<Search />} />
          </Route>
        </Routes>
        <GlobalStyle />
      </UsuarioProvider>
    </BrowserRouter>
  </React.StrictMode>
);
