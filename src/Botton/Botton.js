import React, { Component } from 'react';
//import React, {Redirect} from 'react-router-dom'
import '../Botton/Estilo.css';

//import SignIn from '../LginUsers/SignIn';
import Prueba from '../prueba';
import SignIn from '../LginUsers/SignIn';



class AppBotton extends Component {
  constructor(props) {
    super(props)
    this.shoot = this.shoot.bind(this)
  }
  shoot() {
    alert(this);
  
  }

  render() {
    return (
        <div className="row1"> 
     
 <div className="seccion">
 
  <div className="boton-linea-ext">
    <span className="linea1"></span>
    <span className="linea2"></span>
    <span className="linea3"></span>
    <span className="linea4"></span>
    <a href=""> CSS Hover</a>
  </div>
    <div className="boton-linea-ext2">
    <span className="linea1_2"></span>
    <span className="linea2_2"></span>
    <span className="linea3_2"></span>
    <span className="linea4_2"></span>
    <a >CSS Hover</a>

</div>
</div>
        </div>
    );
  }
}



export default AppBotton;
