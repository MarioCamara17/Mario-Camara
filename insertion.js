function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }

    return arr;
}

let A = [8, 2, 3, 4, 9, 6, 1];
let sortedA = insertionSort(A);
console.log("Arreglo ordenado: ", sortedA);

//Insertion recursiva 
function insertionSortRecursive(arr, n) {
    // Caso base: Si el tamaño del arreglo es 1, ya está ordenado
    if (n <= 1) {
        return;
    }

    // Ordena los primeros n-1 elementos
    insertionSortRecursive(arr, n - 1);

    // Inserta el último elemento en su posición correcta
    let last = arr[n - 1];
    let j = n - 2;

    // Mueve los elementos de arr[0..n-2], que son mayores que el último elemento, una posición adelante
    while (j >= 0 && arr[j] > last) {
        arr[j + 1] = arr[j];
        j = j - 1;
    }
    arr[j + 1] = last;
}

// Función auxiliar para iniciar la recursión
function insertionSort(arr) {
    insertionSortRecursive(arr, arr.length);
    return arr;
}

let B = [8, 2, 3, 4, 9, 6, 1];
let sortedB = insertionSort(A);
console.log("Arreglo Recursivo: ", sortedA);