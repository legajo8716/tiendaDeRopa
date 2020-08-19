
const estado_inicial={
usuario:'changalana',
contraseña:''

}



 export function Login(state=estado_inicial,action,usuario,contraseña){
switch(action.type){
 case'INICIAR_SESION':
 return{
 usuario:usuario,
 contraseña:contraseña
 }
 case 'CERRAR_SESION':
 return{
 usuario:'',
 contraseña:''
 }
 default: return state
 }

}