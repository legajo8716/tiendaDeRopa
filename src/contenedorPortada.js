import React,{useState,Component} from 'react';
import Portada from './portada'
import {Row,Col} from 'react-bootstrap';

export default class ContenedorPortada extends Component{
    render(){
        return (
        <div>
             <Row>
                 <Col >
                    <Portada foto="ropaNene.jpg" titulo="Nenes">
                        <p>Ropa super canchera de Nenes, explotan !!! :)</p>

                    </Portada>

                 </Col>

                 <Col >
                    <Portada foto="foto bebe.jpg" titulo="Bebes">
                        <p> Ropa  para los mas chancheritos !!!</p>
                    </Portada>
                 </Col >

                 <Col >
                    <Portada foto="fotoNena.jpg" titulo="Nenas">
                        <p> Ropa hermosa de nena, excelente para el verano !!</p>
                    </Portada>
                 </Col >

                 <Col >
                    <Portada foto="ropaBeba.jpg" titulo="Bebas">
                        <p>Ropa de Beba, super hermosa !!!</p>
                    </Portada>

                 </Col >

              </Row>

          </div>


        )



    }



}