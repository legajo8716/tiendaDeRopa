import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import {Fab} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';

import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import logo192 from './logo192.png';
import {Image,Button} from 'react-bootstrap';

const useStyles = makeStyles({
  table: {
    with:"1000 px",
    height:"400px",
    minWidth: 650,
    background:"grey",
  },
});

function createData(portada, foto, precio, titulo, texto) {
  return { portada, foto, precio, titulo, texto };
}


export default function Tabla(props) {
  const classes = useStyles();
const rows = props.api.portada.map(nombre=>(createData(nombre.titulo,
                                                       <Image src={nombre.imagen}style={{width:'50px',height:'50px'}}/>,
                                                       nombre.precio,
                                                       nombre.titulo,
                                                       nombre.texto)))



  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Portadas</TableCell>
            <TableCell align="right">Foto</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Titulo</TableCell>
            <TableCell align="right">Texto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.portada}>
              <TableCell component="th" scope="row">
                {row.portada}
              </TableCell>
              <TableCell align="right">{row.foto}<Fab color="secondary" aria-label="edit" style={{width:"26px", height:"26px"}}>
                                                   <EditIcon />
                                                 </Fab></TableCell>
              <TableCell align="right">{row.precio}</TableCell>
              <TableCell align="right">{row.titulo}</TableCell>
              <TableCell align="right" >{row.texto}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <button >nelson</button>
      </Table>
    </TableContainer>
  );
}