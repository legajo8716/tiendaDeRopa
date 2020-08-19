import{connect} from 'react-redux'
import {Login} from './portaReducer.js'
import {Footer} from './footer.js'

const mapStoreToProps = state=> {
    return {
    usuario: state.usuario,
    contraseña: state.contraseña
    }
}


const mapDispatchToProps= dispatch =>{
 return{
    iniciarSesion:(usuario,contraseña)=>dispatch({type:'INICIAR_SESION'}),
    cerrarSesion:(usuario,contraseña)=> dispatch({type:'CERRAR_SESION'})
    }
}

const creardorDeConecciones= connect(mapStoreToProps,mapDispatchToProps);

const conectorDeComponentes= createConnection(Footer);

export default conectorDeComponentes