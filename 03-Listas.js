// Crear una lista con diferentes tipos de datos
let datos = [{
  nombre: "Mario",
  apellidos: "Camara",
  edad: 19,
  estudiante: true,
},
{
    nombre: "Dany",
    apellidos: "Cambrano",
    edad: 34,
    estudiante: false,
}
]

const info = () => {
  /*
    for(let arr in datos){
        console.log(datos[arr])
    }
        */
  /* for (let lis in datos){
        console.log(`${lis}:${datos[lis]}`)
    } */
/* let valores = Object.values(datos)
    for (let valor of valores){       
        console.log(valor)
    } */
  /*  let valores=Object.entries(datos)
   for (let valor of valores){       
    console.log(valor)
    }  */
   /* Object.entries(datos).forEach(([key,value])=>{
    console.log(`${key} : ${value}`)
   }) */
    for (const index in datos) {
        const elementos = datos[index]
        for (const propiedad in elementos) {
          console.log(`${propiedad}=${elementos[propiedad]}`)
        }
  }
}
info();
