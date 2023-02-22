//Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.

function palabraDiez(palabra) {
    var contador = 0;
    while (contador < 10) {
        contador++;
        console.log(contador);
        console.log(palabra);
    }


}






//Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los años que ha cumplido (desde 1 hasta su edad).
function cumpleaños(numero) {

    var contador = 1;
    while (contador <= numero) {
        console.log(contador)
        contador++;

    } console.log(numero);

}


//Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla todos los números impares desde 1 hasta ese número separados por comas.

let contador = 0;
let numerosImpares = [];
function impares(numero){
    if (Number.isInteger(numero) && numero > 0) {

        while (contador < numero) { 

            contador++;
            if (contador % 2 != 0){
                numerosImpares.push(contador)
            }

        } 
    return numerosImpares;
    }
}
console.log(impares(12))



//Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo rectángulo como el de más abajo, de altura el número introducido.

const entero = readlineSync.question("Por favor, ingrese un número entero:")

for (let i = 1; i <= entero; i++) {
  console.log("*".repeat(i));
}
console.log(" ")



// Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a una las letras de la palabra introducida empezando por la última.

let palabra = readlineSync.question("Introduce una palabra:");
let largo = palabra2.length;
let i = largo - 1;

while (i >= 0) {
  console.log(palabra.charAt(i));
  i--;
}