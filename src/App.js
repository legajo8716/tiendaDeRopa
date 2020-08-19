import React,{useState,Component} from 'react';

import logo from './logo.svg';
import './App.css';
import Grilla from './grilla.js';
import Footer from './footer.js'
import Carusel from './carrousel.js';
import Navar from './navar.js';
import Administracion from './administracion.js';
import Tabla from './tabla.js';
import Home from './Home.js';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import {Avatar,SwipeableDrawer,ToggleDrawer,Drawer,Table,TableHead,TableContainer} from '@material-ui/core';

import {Row,Col,Jumbotron,InputGroup,Form,Carousel,Image,Card,Navbar} from 'react-bootstrap';
import logo192 from './logo192.png';

import  TemporaryDrawer from './barra.js';



class App extends Component {

 render() {

return(
   <BrowserRouter>
           <Switch>

             <Route path="/" exact component={Home} />
             <Route path="/administracion" component={Administracion} />
            </Switch>
    </BrowserRouter>

       )
   }
}

export default App;
