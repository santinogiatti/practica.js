/*  let edad = 30;
console.log(edad);

const MI_CONSTANTE = "constante"; 
console.log(MI_CONSTANTE);

let entrada= prompt("ingresar su nombre")

let entrada_fecha= prompt("ingrese su fecha de nacimiento")

let salida= "buenos dias  " + entrada + " usted nacio el " + entrada_fecha + " ?";

prompt(salida)

let ultimate = entrada + " muchas gracias por registrate"

alert(ultimate) */
 

let a, b, c, d, e;

 /* igual a  */



a=8

if (a=8){
    console.log("a es igual a 8");
}

b="9";

if(b==="9"){
    console.log ("b es igual al 9 sting");
}



/* distinto a  */
/* c!=9;

if(c!=9){
    console.log("c es distinto al 9");
}


/* mayor o igual que */

d=10;

if(d=10){
    console.log("d es mayor que 10")
}


/* ejericio else */

let numero1= 10;

let numero2="10";


if( numero1!==numero2){
    console.log("los numeros son estrictamente diferentes")
}
else {
    console.log("los numeros son iguales")
}

/* else if */

let minumero=-10;

if(minumero>0){
    console.log("mi numero es mayor a 0")
}

else if(minumero<0){
    console.log("el valor es negativo")
}else{
    console.log("el valor es 0")
}


/* pedir dato al usuario */

const EDAD = prompt ("por favor, ingrese su edad")

/* cambiar el dato a numero */

const EDAD_NUMERO = parseInt(EDAD)

/* verificar la edad */

if (isNaN(EDAD_NUMERO)){
    console.log("la entrada tiene que ser un numero, volvelo a hacer");
}else{
    /* comprobacion */
    if (EDAD_NUMERO>=18){
        console.log("sos mayor de edad");
    }else{
        console.log("sos menor de edad");
    }
}

/* operadores logicos */
/* operador && */

let edadjoven=24;

let tienelicencia=true;

if (edadjoven>=18 && tienelicencia){
    console.log("podes conducir")
}else{
    console.log("no podes conducir")
}

/* operador logico o ||*/

let estudiante=true;

let empleado=false;

if(estudiante || empleado){
    console.log("es estudiante o empleado")
}else{
    console.log("no es estudiante ni empleado")
}

/* operador logico "no" */

let verano=false;

if(!verano){
    console.log("no es verano")
}else{
    console.log("es verano")
}

/* ejemplo */
let iniciosesion=false;

if(!iniciosesion){
    console.log("no se ha iniciado sesion")
}else{
    console.log("se ha iniciado sesion")
}

/* ejemplo prompt */

const INICIAR_SESION = prompt("¿iniciaste sesion? ¿si? ¿no?")

if (INICIAR_SESION=== "no"){
    alert("por favor, inicia sesion")
}else{
    alert("ingresaste")
}