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

const mostrar = (array, tipo) => 
  array.length ? array.forEach(item => console.log(item)) : console.log(`No hay ${tipo}.`);

const baja = (array, clave, mensaje) => {
  const id = +prompt(mensaje);
  const index = array.findIndex(item => item[clave] === id);
  index !== -1 ? array.splice(index, 1) && console.log(`${clave} eliminado.`) : console.log(`${clave} no encontrado.`);
};

const rentaPelicula = () => {
  const miembro = miembros.find(m => m.membresia === +prompt("Numero de membresia del miembro: "));
  const pelicula = peliculas.find(p => p.numero === +prompt("Numero de pelicula: "));
  
  if (miembro && pelicula && miembro.estado === 'Libre de multa' && pelicula.estado === 'Disponible') {
    const fechaRenta = new Date();
    const fechaDevolucion = new Date(fechaRenta);
    fechaDevolucion.setDate(fechaRenta.getDate() + 3);
    pelicula.estado = 'Rentada';
    rentas.push(new Renta(miembro, pelicula, fechaRenta, fechaDevolucion.toISOString().split('T')[0])); // Only date part
    console.log(`Pelicula rentada hasta: ${fechaDevolucion.toISOString().split('T')[0]}`); // Only date part
  } else {
    console.log("No se puede realizar la renta.");
  }
};

const mostrarRentas = () => 
  rentas.length ? rentas.forEach(r => console.log(`Miembro: ${r.miembro.nombre}, Pelicula: ${r.pelicula.titulo}, Fecha de Devolucion: ${r.fechaDevolucion}`)) 
                : console.log("No hay rentas registradas.");

(function main() {
  while (true) {
    mostrarMenu();
    const opcion = +prompt("Opcion: ");
    switch (opcion) {
      case 1: registrarMiembro(); break;
      case 2: mostrar(miembros, 'miembros'); break;
      case 3: baja(miembros, 'membresia', "Numero de membresia a eliminar: "); break;
      case 4: registrarPelicula(); break;
      case 5: mostrar(peliculas, 'peliculas'); break;
      case 6: baja(peliculas, 'numero', "Numero de pelicula a eliminar: "); break;
      case 7: rentaPelicula(); break;
      case 8: mostrarRentas(); break;
      case 9: return;
      default: console.log("Opcion invalida.");
    }
  }
})();
