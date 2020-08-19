import React from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {Row,Col,InputGroup,Form,Carousel,Image} from 'react-bootstrap';
import logo192 from './logo192.png';
import ropa1 from './ropa1.jpeg';
import ropa2 from './ropa2.jpeg';
import ropa3 from './ropa3.jpeg';


export default class Carusel extends React.Component{

constructor(){
    super();
    this.state={
    color:'primary',
    parrafo:''


    }
this.mostrameAlgo= this.mostrameAlgo.bind(this);
this.eliminame= this.eliminame.bind(this);

}

mostrameAlgo(e){
return(
         this.setState({parrafo: '<p>Para estar fdffffffffffffffo para salir.</p>'

}))
}
eliminame(e){
return(
         this.setState({parrafo: ''

}))
}


render(){
return(
<div className="carusel">


<Carousel className="carusel1">
  <Carousel.Item >
        <Image src={ropa1} className="w-25" roundedCircle />

    <Carousel.Caption onMouseMove={this.mostrameAlgo} onMouseOut={this.eliminame}>
      <h3 >Conjuntitos </h3>

      <p>Para estar o para salir.</p>
            <Button variant={this.state.color}>Lo quiero</Button>
            <div> {this.state.parrafo} </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
                           <Image src={ropa2} className="w-25" roundedCircle/>


    <Carousel.Caption>
      <h3>Jeans</h3>
      <p>Canchero y atractivo.</p>
      <Button variant="secondary">Lo quiero</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
                           <Image src={ropa3} className="w-25" roundedCircle />


    <Carousel.Caption>
      <h3>Camperas</h3>
      <p>Hermosas y peculiares.</p>
            <Button variant="secondary">La quiero</Button>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
                             <Image src={ropa3} className="w-25" roundedCircle />


      <Carousel.Caption>
        <h3>Camperas</h3>
        <p>Hermosas y peculiares.</p>
              <Button variant="secondary">La quiero</Button>

      </Carousel.Caption>
    </Carousel.Item>
</Carousel>


</div>
)


}





}