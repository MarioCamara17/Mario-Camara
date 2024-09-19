const prompt = require("prompt-sync")();
const n = parseInt(prompt("Ingrese cuantas veces quiere que se repita la secuencia: "))

//Sin recursividad con arreglos
/* function fibonacci(n){
    let arr=[0,1]

    for (let i=2;i<n;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    return arr
}
console.log(fibonacci(n))
 */

//Sucesion de valores con variables
/* function fibo(n){
    let inicial = 0
    let temporal = 1
    let actual = 0
    console.log(0)
    for (i=0;i<n;i++){
    inicial = temporal
    temporal = actual
    actual = inicial + temporal
    console.log(actual)
    }
}
fibo(n) */

//Recursividad
function fibo(n) {
    if (n < 2) return n;
   
      return fibo(n-1) + fibo(n-2);
}
  
  function secuencia(n) {
    for (let i = 0; i < n; i++) {
      console.log(fibo(i));
    }
  }
  
secuencia(n)