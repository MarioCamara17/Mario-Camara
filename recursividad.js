const prompt = require("prompt-sync")();

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  const número = parseInt(prompt("Ingrese el numero que desea obtener factorial: "))
  const resultado = factorial(número);
  console.log(`El factorial de ${número} es ${resultado}`);