import React from 'react';
import Banner from './Componts/Banner'
import BarraSuperior from './Componts/barra superior'
import Header from'./Componts/Header';
import Profile from './Componts/Profile';
import './App.css'

function App() {
  return (
    <div className="App">
   
    <Header />
   <Banner />
   <BarraSuperior/>
   <Profile/>

    </div>
  );
}

export default App;
