/*
1.Crear el metodo para añadir un empleado con el prompt-sync
2.Crear el metodo para eliminar al ultimo empleado de la lista
3.Utilizar el set y get para cada propiedad
4.Crear un metodo para calcular el sueldo de cada trabajador agregado,
si se extiende de sus horas de trabajo se le agrega un 15% adicional
*/

const prompt = require(`prompt-sync`)();
class Empleado{
    constructor(nombre,apellidos,RFC,direccion,telefono,horasTrabajadas){
        this._nombre=nombre
        this._apellidos=apellidos
        this._RFC=RFC
        this._direccion=direccion
        this._telefono=telefono
        this._horasTrabajadas=horasTrabajadas
    }
    get nombre() {
        return this._nombre;
    }
    
    set nombre(nombre) {
        this._nombre = nombre;
    }
    
    get apellidos() {
        return this._apellidos;
    }
    
    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
    
    get RFC() {
        return this._RFC;
    }
    
    set RFC(RFC) {
        this._RFC = RFC;
    }
    
    get direccion() {
        return this._direccion;
    }
    
    set direccion(direccion) {
        this._direccion = direccion;
    }
    
    get telefono() {
        return this._telefono;
    }
    
    set telefono(telefono) {
        this._telefono = telefono;
    }
    get horasTrabajadas() {
        return this._horasTrabajadas;
    }
    
    set horasTrabajadas(horasTrabajadas) {
        this._horasTrabajadas = horasTrabajadas;
    }    
    calcularSueldohoras() {
        let sueldoBase = 1000;
        let horasExtras = this._horasTrabajadas - 40; 
        let sueldoExtra = 0;
    
        if (horasExtras > 0) {
          sueldoExtra = horasExtras * sueldoBase * 0.15; 
        }
    
        return sueldoBase * this._horasTrabajadas + sueldoExtra;
    }
}

let trabajadores = [];

function añadirEmpleado() {
  let nombre = prompt("Ingrese el nombre: ");
  let apellidos = prompt("Ingrese el apellido: ");
  let RFC = prompt("Ingrese su RFC: ");
  let direccion = prompt("Ingrese su dirección: ");
  let telefono = prompt("Ingrese su numero de telefono: ");
  let horasTrabajadas = parseInt(prompt("Ingrese horas trabajadas: "));

  let empleado = new Empleado(nombre, apellidos, RFC, direccion, telefono, horasTrabajadas);
  trabajadores.push(empleado);
}

function eliminarUltimoEmpleado() {
  trabajadores.pop();
}

Nuevos = prompt("Ingrese cuantos empleados nuevos se registraran: ");
i = 0;

while (i < Nuevos) {
  añadirEmpleado();
  i++;
}

eliminarUltimoEmpleado();

trabajadores.map((data) => {
    console.log(`Empleado: ${data.nombre} Apellido:${data.apellidos} RFC:${data._RFC} Direccion:${data.direccion} Telefono:${data.telefono}`);
    console.log(`Sueldo: ${data.calcularSueldohoras().toFixed(2)}`);
  });