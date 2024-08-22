//Realizar un arreglo con 2 dimensiones y guardar 2 arreglos internos y dar lectura a los datos internos

const A = [
    [1, 2, 3, 4],
    [5, 6, 7, 8]
  ];
  
  const datosArreglo = () => {
    A.map((datos, index) => {
      datos.map((valores, i) => {
        console.log(`${i}=${valores}`);
      });
    });
  };
  
  datosArreglo(); 

  //for of

  //for in

  //for each

  //funcion flecha

  //while