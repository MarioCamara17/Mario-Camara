//Ordenamiento rapido
function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  console.log(quickSort([8, 2, 3, 4, 9, 6, 1]));

//Quick sort recursivo
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Particionamos el arreglo y obtenemos el índice del pivote
        let pi = partition(arr, low, high);

        // Ordenamos recursivamente los subarreglos
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    // Elegimos el último elemento como pivote
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            // Intercambiamos arr[i] y arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // Intercambiamos arr[i + 1] y arr[high] (o el pivote)
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

console.log(quickSort([8, 2, 3, 4, 9, 6, 1]));