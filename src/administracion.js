import React,{useState,Component} from 'react';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Avatar,TablePagination,ToggleDrawer,Drawer} from '@material-ui/core';
import Tabla from './tabla.js';
import api from './Api'

export default class Administracion extends Component{

render(){ return(
<div >
    <Card >
        <Card.Header>
            <h1> Administracion</h1>
        </Card.Header>
        <Card.Text>
            En esta seccion usted podra modificar el contenido de su portada
        </Card.Text>
    </Card>
<div >
<Tabla api={api} />
</div>




</div>
)
}


}