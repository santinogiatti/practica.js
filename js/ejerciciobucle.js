/* 

operadores de incremento/operadores de decremento 

 son operadores unitarios que nos van a ayudar a aumentar o disminuir el valor de una variable

 operadores de incremento++

 post incremento, se expresade la siguiente manera variable++
*/


/* post incremento */

/* let x=5;
let y=x++; 
console.log(y) */

/* variable++ ===> variable+ = 1 ===> variable = variable + 1*/

/* pre incremento ++variable */

/* el valor de la variable se incrementa antes de ser ultilizada */

/* for(let i=0; i<21; i++){
    console.log("interacion numero", i)
}


const NUMERO=6;
for(let i=1; i<=10; i++){
    const RESULTADO= NUMERO*i;
    console.log(NUMERO + " X " + i + " = " + RESULTADO)
}
 */
/* break en bucles */

/* const NUMEROS_BREAK= [1, 3, 5, 7, 8, 9, 11];
const NUMERO_BUSCADO= 5;

for(let i=0; i<NUMEROS_BREAK.length; i++){
    if (NUMEROS_BREAK[i] === NUMERO_BUSCADO){
        console.log("Numeros encontrados " + NUMERO_BUSCADO)
        break;
    }
    console.log("numero actual"+ NUMEROS_BREAK[i])
} */

/* ciclo WHILE */

/* WHILE (condicion){

} */


let contador=1;/* vamos a iniciar en 1 */

while(contador <=5)/* mientras la variable contador sea igual o menor a 5 se va a ejecutar */{
    console.log("numero: " + contador)
    contador++;/* se va a incrementar la variable contador de 1 en 1  */
}

/* const PALABRA_SECRETA= "javascript";
let=intentos=0;
let=adivinanza= " ";

while(adivinanza !== PALABRA_SECRETA ){
    adivinanza=prompt("Adivina la palabra secreta(es un lenguaje de programacion)").toLowerCase();
    intentos++;
    if( adivinanza !== PALABRA_SECRETA){
        alert("intenta denuevo")
    }
}

alert(" felicidades encontraste la palabra secreta en " + intentos + " intentos"); */


/* do{
     se ejecuta el codigo aunquesea una sola vez 
} while condicion   */


/* let suma = 0;
let continuar;

do {
    const NUMERO_SUMA = parseFloat(prompt("Ingrese un número para sumar"));
    
    if (!isNaN(NUMERO_SUMA)) {
        suma += NUMERO_SUMA;
        continuar = prompt("¿Quiere seguir sumando? SI / NO").toLowerCase();
    } else {
        alert("Ingrese un número válido.");
        continuar = "si";
    }
} while (continuar === "si");

console.log("La suma es " + suma); */


/* let color = prompt("ingresa un color PRIMARIO")
switch (color){
    case"rojo":
    console.log("color rojo");
    break;

    case"azul":
    console.log("color azul");
    break;

    case"amarillo":
    console.log("color amarillo");
    break;

    default:
        alert("El color ingresado no es un color primario")
} */



