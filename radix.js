// Función para obtener el dígito en la posición exp (exp = 1 para unidades, exp = 10 para decenas, etc.)
function getDigit(num, exp) {
    return Math.floor(num / exp) % 10;
  }
  
  // Función para obtener el número máximo en el arreglo
  function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // Función para hacer el conteo y ordenar según el dígito actual
  function countingSortByDigit(arr, exp) {
    let n = arr.length;
    let output = new Array(n).fill(0);
    let count = new Array(10).fill(0);
  
    // Contar las ocurrencias de cada dígito
    for (let i = 0; i < n; i++) {
      let digit = getDigit(arr[i], exp);
      count[digit]++;
    }
  
    // Cambiar count[i] para que contenga la posición real de este dígito en output[]
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }
  
    // Construir el arreglo de salida
    for (let i = n - 1; i >= 0; i--) {
      let digit = getDigit(arr[i], exp);
      output[count[digit] - 1] = arr[i];
      count[digit]--;
    }
  
    return output;
  }
  
  // Función principal de Radix Sort iterativo
  function radixSortIterativo(arr) {
    let max = getMax(arr);
  
    // Hacer counting sort para cada dígito. En lugar de pasar el número del dígito, exp es 10^i donde i es el dígito actual
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
      arr = countingSortByDigit(arr.slice(), exp);
    }
  
    return arr;
  }
  
  // Ejemplo de uso
  console.log(radixSortIterativo([8, 2, 3, 4, 9, 6, 1]));
  





  //Radix recursivo
  function getDigitRecursive(num, exp) {
    return Math.floor((num / exp) % 10);
  }
  
  function getMaxRecursive(arr) {
    return Math.max(...arr);
  }
  
  function countingSortByDigitRecursive(arr, exp) {
    let n = arr.length;
    let output = new Array(n).fill(0);
    let count = new Array(10).fill(0);
  
    for (let i = 0; i < n; i++) {
      let digit = getDigitRecursive(arr[i], exp);
      count[digit]++;
    }
  
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }
  
    for (let i = n - 1; i >= 0; i--) {
      let digit = getDigitRecursive(arr[i], exp);
      output[count[digit] - 1] = arr[i];
      count[digit]--;
    }
  
    return output;
  }
  
  function radixSortRecursive(arr, exp) {
function radixSortRecursive(arr, exp) {
  if (exp <= 1) {
    return arr;
  }

  arr = countingSortByDigitRecursive(arr.slice(), exp);
  arr = radixSortRecursive(arr, Math.floor(exp / 10));
  return arr;
}
  
    arr = countingSortByDigitRecursive(arr.slice(), exp);
    return radixSortRecursive(arr, Math.floor(exp / 10));
  }
  
  function radixSort(arr) {
    let max = getMaxRecursive(arr);
    let sortedArr = radixSortRecursive(arr.slice(), Math.floor(max / 1));
    return sortedArr;
  }
  
  console.log(radixSort([8, 2, 3, 4, 9, 6, 1]));