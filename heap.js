//Ordenamiento por monticulo
function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
  
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }
  
function heapSort(arr) {
    let n = arr.length;
  
    // Construir el max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    // Extraer elementos uno por uno
    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  console.log(heapSort([8, 2, 3, 4, 9, 6, 1]));

//Heap recursivo
  function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function buildMaxHeap(arr, n, i) {
    if (i < 0) {
        return;
    }

    heapify(arr, n, i);
    buildMaxHeap(arr, n, i - 1);
}

function heapSortRecursive(arr, n) {
    if (n <= 1) {
        return;
    }

    // Mover el elemento máximo al final del arreglo
    [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];

    // Llamar recursivamente para heapificar el arreglo reducido
    heapify(arr, n - 1, 0);

    // Llamar recursivamente para ordenar el resto del arreglo
    heapSortRecursive(arr, n - 1);
}

function heapSort(arr) {
    let n = arr.length;

    // Construir el max heap de manera recursiva
    buildMaxHeap(arr, n, Math.floor(n / 2) - 1);

    // Ordenar el arreglo de manera recursiva
    heapSortRecursive(arr, n);

    return arr;
}

console.log(heapSort([8, 2, 3, 4, 9, 6, 1]));
