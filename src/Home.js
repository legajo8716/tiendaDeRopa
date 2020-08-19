import React,{useState,Component} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Grilla from './grilla.js';
import Footer from './footer.js'
import Carusel from './carrousel.js';
import Navar from './navar.js';
import Administracion from './administracion.js';
import Tabla from './tabla.js';
import {Avatar,SwipeableDrawer,ToggleDrawer,Drawer,Table,TableHead,TableContainer} from '@material-ui/core';
import {Row,Col,Jumbotron,InputGroup,Form,Carousel,Image,Card,Navbar} from 'react-bootstrap';
import logo192 from './logo192.png';
import  TemporaryDrawer from './barra.js';
import ContenedorPortada from './contenedorPortada'

class Home extends Component {

    constructor(props){
        super(props);

        this.state={

        }
    }
 render() {
    return (

<div >
    <div className= "BarraSuperior" >
        <Image src={logo192} style={{width:'50px',height:'50px'}}/>
        <TemporaryDrawer/>
        <div style={{ marginLeft:'auto'}}>
            <Avatar alt="Remy Sharp" src="nelson.jpg" />
        </div>

    </div>
   {this.state.iniciarSesion}
    <Navar/>
    <ContenedorPortada/>


</div>

 )
  }
}

export default Home;
