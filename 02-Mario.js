//Realizar un arreglo con 2 dimensiones y guardar 2 arreglos internos y dar lectura a los datos internos

const A = [
    [1, 2, 3, 4],
    [5, 6, 7, 8]
  ];
  
  //.map
 /* const datosArreglo = () => {
    A.map((datos, index) => {
      datos.map((valores, i) => {
        console.log(`${i}=${valores}`);
      });
    });
  };
*/ 

  //for of (Iteracion de arreglos)

  /*
const datosArreglo = () => {
  for (const datos of A) {
    for (const valores of datos) {
      console.log(`${datos.indexOf(valores)}=${valores}`)
    }
  }
}
  */

  //for in (Iteracion de objetos)

  /*
const datosArreglo = () => {
  for (const index in A) {
    const datos = A[index]
    for (const propiedad in datos) {
      console.log(`${propiedad}=${datos[propiedad]}`)
    }
  }
}
  */

  //for each
  /*

const datosArreglo = () => {
  A.forEach((datos, index) => {
    datos.forEach((valor, propiedad) => {
      console.log(`${propiedad}=${valor}`)
    })
  })
}
  */

  //funcion flecha
  /*
const datosArreglo = () => {
  A.forEach(datos => datos.forEach((valor, propiedad) => console.log(`${propiedad}=${valor}`)))
}
  */
  //while
const datosArreglo = () => {
  let i = 0
  while (i<A.length) {
    let j = 0
    while (j<A[i].length) {
      console.log(`${j}=${A[i][j]}`)
      j++
    }
    i++
  }
}
  datosArreglo();