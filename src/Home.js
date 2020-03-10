import React from 'react';
import './App.css';
import AppBotton from './Botton/Botton';
import Bienvenido from './Inicio/Bienvenido';
import Social from './SocialNetwork/SocialNetworks';


function App() {
  
  return (
   
    <div>
     
      
      <Bienvenido   />
      <div className="ColorButton"> 
      <AppBotton  /> 
      </div>


      <Social />  
    </div>
    
    
  );
}

export default App;
