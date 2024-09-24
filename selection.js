//Selection sort
function selectionSort(arr) {
    let n = arr.length;
  
    for (let i = 0; i < n; i++) {
      let minIndex = i;
      // Encontrar el mínimo elemento en el arreglo desordenado
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // Intercambiar el mínimo elemento con el primer elemento
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  
    return arr;
  }
  
  console.log(selectionSort([8, 2, 3, 4, 9, 6, 1]));

//Selection recursivo
function selectionSortRecursive(arr, start = 0) {
    let n = arr.length;

    if (start >= n - 1) {
        return;
    }

    let minIndex = start;
    for (let j = start + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }

    [arr[start], arr[minIndex]] = [arr[minIndex], arr[start]];

    selectionSortRecursive(arr, start + 1);
}

function selectionSort(arr) {
    selectionSortRecursive(arr);
    return arr;
}

console.log(selectionSort([8, 2, 3, 4, 9, 6, 1]));