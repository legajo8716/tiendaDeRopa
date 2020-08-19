import React from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {Row,Col,InputGroup,Form} from 'react-bootstrap';



class Footer extends React.Component {
constructor(props){
    super(props);
    this.state={
        password:"password",
    }
        this.cambiarDeEstado = this.cambiarDeEstado.bind(this);


}
 cambiarDeEstado(){
if(this.state.password=="password"){
this.setState({
password:''}
)
}
else{

this.setState({
password:'password'}
)
}
}

  render() {
   return (
<div  >

<Form variant="primary">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>nombre de usuario</Form.Label>
    <Form.Control type="email" placeholder="Usuario" />
    <Form.Text className="text-muted">
       Nunca revele su contraseña.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>contraseña</Form.Label>
    <Form.Control type={this.state.password} placeholder={this.state.condicion} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Mostrar contraseña" onChange={this.cambiarDeEstado} />
  </Form.Group>
 {console.log(this.props.usuario)}

  <Button variant="secondary" type="submit" >

  }
    Iniciar
  </Button>
</Form>
</div>




    )

  }

}

export default Footer;