

/* function saludar(){
    console.log("¡hola chicos!");
    console.log("¡hola chicos!");
    console.log("¡hola chicos!");
    console.log("¡hola chicos!");
    console.log("¡hola chicos!");
    console.log("¡hola chicos!");
    console.log("¡hola chicos!");

}

saludar(); */

/* function sumar() {
    let num1=parseFloat(prompt("ingresa un numero"))
    let num2=parseFloat(prompt("ingresa el segundo numero"))
    let resultado=num1+num2;
    alert("la suma es " + resultado)
}

sumar(); */


/* let ingresaNombre = prompt("ingresa tu nombre"){
    console.log("tu nombre es " + ingresaNombre)
} */



/* function PedirNombre(){
    let ingresaNombre = prompt("ingresa tu nombre")
        alert("tu nombre es " + ingresaNombre)   
};

PedirNombre();


let numero=0;

while(numero < 3){
    PedirNombre()
    numero++;
} */


/* parametros */

/* let nombreIngresado=prompt("ingresa tu nombre");
let apellidoIngresado=prompt("ingresa tu apellido");

function saludar(nombre, apellido){
    console.log("bienvenido " + nombre + " " + apellido);
};

saludar(nombreIngresado, apellidoIngresado);
 */



/* calculadora de descuento  */


function calculadoraConDescuento(total, descuento){

    let desc = (total*descuento)/100;
    let totalConDesc= total - desc;

    return totalConDesc;
}


let totalConDescuento=calculadoraConDescuento(10000,50);
console.log("total del precio con el descuento aplicado es: " + totalConDescuento);