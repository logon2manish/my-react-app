import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Header/header'
import Menu from './Menu/menu'
import Main from './Main/main'
import Footer from './Footer/footer'
import MyElements from './MyHTML/all-elements';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyElements />
  </React.StrictMode>
);
/*
    <Header />
    <Menu />
    <Main />
    <Footer />
*/
