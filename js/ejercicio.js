const NOMBRE_USUARIO= prompt("ingrese nombre de usuario")
const CONTRASENIA= prompt("ingrese su contraseña")

if (NOMBRE_USUARIO==="admin"&&(CONTRASENIA==="secreta" || CONTRASENIA==="123456")){
    console.log("estas dentro")
}else{
    console.log("Los datos no son correctos")
}
