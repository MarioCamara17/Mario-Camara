const prompt = require(`prompt-sync`)();

/* let numero1 

numero1=prompt("Ingrese el numero 1: ")

console.log(numero1)
 */
/*Realizar un programa que contenga un arreglo indefinido,
en el que se solicite a traves del teclado el tamaño y 
se ingrese por lo menos 4 valores de cualquier tipo
utilizando un ciclo para ingresar los datos
imprimir los valores en pantalla*/

Arreglo = [];
tamaño = prompt("Ingrese el tamaño: ");
/* let tamaño = prompt("Ingrese el tamaño del arreglo: ")

function añadir(){

    i=0
    while (i<tamaño){
        Arreglo.push(prompt("Ingrese el elemento a añadir: "))
        i++
    }
}añadir() */

/* for (const datos of Arreglo) {
      console.log(datos)
} */
function ob() {
  i = 0;
  while (i < tamaño) {
    let nombre = prompt("nombre: ");
    let edad = prompt("edad: ");

    let objeto = { nombre, edad };
    Arreglo.push(objeto);
    i++
  }
}
ob();
Arreglo.map((data) => {
  console.log(data);
});
