//Ordenamiento por mezcla
function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  console.log(mergeSort([8, 2, 3, 4, 9, 6, 1]));

//Merge recursivo
function mergeSort(arr, tempArr = [], leftStart = 0, rightEnd = arr.length - 1) {
    if (leftStart >= rightEnd) {
        return;
    }

    const middle = Math.floor((leftStart + rightEnd) / 2);
    mergeSort(arr, tempArr, leftStart, middle);
    mergeSort(arr, tempArr, middle + 1, rightEnd);
    mergeHalves(arr, tempArr, leftStart, middle, rightEnd);

    return arr;
}

function mergeHalves(arr, tempArr, leftStart, middle, rightEnd) {
    let leftEnd = middle;
    let rightStart = middle + 1;
    let size = rightEnd - leftStart + 1;

    let left = leftStart;
    let right = rightStart;
    let index = leftStart;

    while (left <= leftEnd && right <= rightEnd) {
        if (arr[left] <= arr[right]) {
            tempArr[index] = arr[left];
            left++;
        } else {
            tempArr[index] = arr[right];
            right++;
        }
        index++;
    }

    // Copiamos los elementos restantes de la mitad izquierda, si hay
    while (left <= leftEnd) {
        tempArr[index] = arr[left];
        left++;
        index++;
    }

    // Copiamos los elementos restantes de la mitad derecha, si hay
    while (right <= rightEnd) {
        tempArr[index] = arr[right];
        right++;
        index++;
    }

    // Copiamos el arreglo temporal de vuelta al arreglo original
    for (let i = leftStart; i <= rightEnd; i++) {
        arr[i] = tempArr[i];
    }
}

console.log(mergeSort([8, 2, 3, 4, 9, 6, 1]));