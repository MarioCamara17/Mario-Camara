function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}


let A = [8, 2, 3, 4, 9, 6, 1];
let sortedA = bubbleSort(A);
console.log("Arreglo ordenado: ", sortedA);

//Burbuja recursiva
const bubbleSortrec = (arr, n = arr.length) => {
    if(n === 1) return arr;
    for(let i = 0; i < n - 1; i++) {
        if(arr[i]>arr[i+1]) [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
    }
    return bubbleSortrec(arr,n-1)
}

console.log(bubbleSortrec([8, 2, 3, 4, 9, 6, 1]))

