const prompt = require('prompt-sync')();
class Persona {
  constructor(nombre, edad, sexo, direccion, telefono) {
    this._nombre = nombre;
    this._edad = edad;
    this._sexo = sexo;
    this._direccion = direccion;
    this._telefono = telefono;
    this._grupo = [];
  }
  añadir() {
    const tamaño = parseInt(prompt("Ingrese cuántas personas desea registrar: "), 10);
    for (let i = 0; i < tamaño; i++) {
      const nombre = prompt("Ingrese el nombre: ");
      const edad = prompt("Ingrese la edad: ");
      const sexo = prompt("Ingrese el sexo: ");
      const direccion = prompt("Ingrese la dirección: ");
      const telefono = prompt("Ingrese el teléfono: ");
      const persona = new Persona(nombre, edad, sexo, direccion, telefono);
      this._grupo.push(persona);
    }
  }
  mostrar() {
    console.log("Empleados: ");
    this._grupo.forEach((data) => {
      console.log(data);
    });
  }
}
let people = new Persona();
people.añadir();
people.mostrar();