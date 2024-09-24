function bucketSort(arr) {
    let n = arr.length;
    if (n <= 1) return arr; // Arreglo ya está ordenado si tiene 1 o menos elementos
  
    // Encontrar el valor máximo en el arreglo para normalizar los índices de los buckets
    let maxValue = Math.max(...arr);
  
    // Crear los buckets (inicializados como arrays vacíos)
    let buckets = Array.from({ length: n }, () => []);
  
    // Distribuir elementos en los buckets
    for (let i = 0; i < n; i++) {
      let index = Math.floor((arr[i] / maxValue) * (n - 1)); // Normalizar por el valor máximo
      buckets[index].push(arr[i]);
    }
  
    // Ordenar cada bucket individualmente
    for (let i = 0; i < n; i++) {
      buckets[i] = insertionSort(buckets[i]); // Usamos insertionSort para cada bucket
    }
  
    // Concatenar los buckets ordenados
    let sortedArr = [].concat(...buckets);
  
    return sortedArr;
  }
  
  function insertionSort(arr) {
    let n = arr.length;
  
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = key;
    }
  
    return arr;
  }
  
  // Ejemplo de uso
  let A = [8, 2, 3, 4, 9, 6, 1];
  let sortedA = bucketSort(A);
  console.log(sortedA);

//Bucket recursivo
function bucketSort(arr) {
    if (arr.length <= 1) return arr; 
  
    let n = arr.length;
    let maxValue = Math.max(...arr); 
  
    let buckets = Array.from({ length: n }, () => []);
  
    for (let i = 0; i < n; i++) {
      let index = Math.floor((arr[i] / maxValue) * (n - 1));
      buckets[index].push(arr[i]);
    }
  
    return concatenateBuckets(buckets);
  }
  
  function concatenateBuckets(buckets) {
    if (buckets.length === 0) return [];
  
    let firstBucket = buckets[0];
    let sortedFirstBucket = insertionSortRecursive(firstBucket); 
  
    return sortedFirstBucket.concat(concatenateBuckets(buckets.slice(1)));
  }
  
  function insertionSortRecursive(arr, n = arr.length) {
    if (n <= 1) return arr; 
  
    insertionSortRecursive(arr, n - 1);
  
    let last = arr[n - 1];
    let j = n - 2;
  
    while (j >= 0 && arr[j] > last) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = last;
  
    return arr;
  }
  
  // Ejemplo de uso
  let B = [8, 2, 3, 4, 9, 6, 1];
  let sortedB = bucketSort(A);
  console.log(sortedA);
  