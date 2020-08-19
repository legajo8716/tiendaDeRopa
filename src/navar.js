
import React from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {Row,Col,InputGroup,Form,Navbar,Nav,FormControl} from 'react-bootstrap';





export default class Navar extends React.Component {
constructor(props){
    super(props);


}


render(){

return(
          <Navbar bg="light" variant="light" expand="lg">
             <Navbar.Brand href="#home">MV</Navbar.Brand>
             <Nav className="mr-auto">
               <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#features">catalogo</Nav.Link>
               <Nav.Link href="#pricing">tienda online</Nav.Link>
                <Nav.Link href="/administracion" onclick={console.log(this.props.history)}>Administrador</Nav.Link>

             </Nav>
             <Form inline>
               <FormControl type="text" placeholder="Buscar pedido" className="mr-sm-2" />
               <Button variant="outline-primary">Buscar</Button>
             </Form>
           </Navbar>
       )


}





}