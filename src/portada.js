import React,{useState,Component} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Grilla from './grilla.js';
import Footer from './footer.js'
import Carusel from './carrousel.js';
import Navar from './navar.js';

import {Row,Col,InputGroup,Form,Carousel,Image,Card,Navbar} from 'react-bootstrap';






export default class Portada extends Component{

constructor(props){
    super(props);
    this.state={
    background:'secondary'
    }
    this.seleccion=this.seleccion.bind(this);
}
seleccion(fondo,letra,e){
console.log(e);
this.setState({

 background: fondo,
color: letra

})

}
render(){return(
<div style={{background: this.state.background}} onClick= {this.cambiarColor}>
    <Card border="dark" style={{ width: '18rem', height:'27rem' ,border:"yellow"}} bg={this.state.background} onMouseEnter={this.seleccion.bind(this,"primary","grey")} onMouseLeave={this.seleccion.bind(this,"secondary","white")}>
      <div className="imagen">
         <Card.Img variant="top" src={this.props.foto} style={{width:"180px", height:"250px"}} />
      </div>
      <Card.Body border="dark">
       <div className="imagen">
        <Card.Title>{this.props.titulo}</Card.Title>
         </div >
         <div style={{height:'70px'}}>
        <Card.Text>
         {this.props.children}
        </Card.Text>
        </div>
        <Button variant="danger" style={{color:this.state.color}}>Comprar</Button>
      </Card.Body>
    </Card>
</div>

)
}






}