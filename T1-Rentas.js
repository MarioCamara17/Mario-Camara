const prompt = require("prompt-sync")();

class Miembros {
  constructor(membresia, nombre, direccion, telefono, estado) {
    Object.assign(this, { membresia, nombre, direccion, telefono, estado });
  }
}

class Pelicula {
  constructor(numero, titulo, clasificacion, tipo) {
    Object.assign(this, { numero, titulo, clasificacion, tipo, estado: 'Disponible' });
  }
}

class Renta {
  constructor(miembro, pelicula, fechaRenta, fechaDevolucion) {
    Object.assign(this, { miembro, pelicula, fechaRenta, fechaDevolucion });
  }
}

const miembros = [], peliculas = [], rentas = [];

const mostrarMenu = () => {
  console.log(`
1. Registro de miembros
2. Consultas general de miembros
3. Baja de miembro
4. Registro de peliculas
5. Consultas general de peliculas
6. Baja de pelicula
7. Rentar pelicula
8. Consultar peliculas rentadas
9. Salida`);
};

const registrarMiembro = () => {
  miembros.push(new Miembros(
    +prompt("Numero de membresia: "), 
    prompt("Nombre: "), 
    prompt("Direccion: "), 
    +prompt("Telefono: "), 
    prompt("Estado (Deudor/Libre de multa): ")//Para que funcione debe escribirse igual
  ));
};

const registrarPelicula = () => {
  peliculas.push(new Pelicula(
    +prompt("Numero: "), 
    prompt("Titulo: "), 
    prompt("Clasificacion: "), 
    prompt("Tipo (Estreno/Catalogo): ")
  ));
};
