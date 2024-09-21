class Alumnos{
    constructor (nombre,numControl,){
    this._nombre = nombre
    this._numControl = numControl
    }
}

class Docente{
    constructor(nombre){
        this._nombre = nombre
    }
}

class Materia{
    constructor(nombre,docente){
        this._nombre = nombre
        this._docente = docente
    }
}

class Calificacion extends Alumnos{
    constructor(Nombre,numControl,Materia,calificaciones){
        super(Nombre,numControl)
        this._materia = Materia
        this._calificaciones = calificaciones
    }
    calcularPromedio(){
        const Total = this._calificaciones.reduce((acc,cal) => acc + cal, 0)
        return Total / this._calificaciones.length.toFixed(2)
    }

    mostrarInfo(){
        console.log(`No. Control: ${this._numControl}`);
        console.log(`Alumno: ${this._nombre}`);
        console.log(`Materia: ${this._materia._nombre}`);
        console.log(`Docente: ${this._materia._docente._nombre}`);
        console.log(`Calificaciones: ${this._calificaciones.join(", ")}`);
        console.log(`Promedio: ${this.calcularPromedio()}`);
        console.log(`----------------------`)
        
        
    }
}

const Profe1 = new Docente(`José`)
const Profe2 = new Docente(`Pedro`)
const Profe3 = new Docente(`Juan`)

const matematicas = new Materia(`Matematicas`,Profe1)
const fisica = new Materia(`Física`,Profe2)
const programacion = new Materia(`Programación`,Profe3)

//Calificaciones de Dany
const califDany1 = new Calificacion("Dany", "05E20115", matematicas, [90,95])
const califDany2 = new Calificacion("Dany", "05E20115", fisica, [85,75])
const califDany3 = new Calificacion("Dany", "05E20115", programacion, [30,30])

//Calificaciones de Luis
const califLuis1 = new Calificacion("Luis", "05E20116", matematicas, [75,85])
const califLuis2 = new Calificacion("Luis", "05E20116", fisica, [70,30])
const califLuis3 = new Calificacion("Luis", "05E20116", programacion, [75,90])

califDany1.mostrarInfo()
califDany2.mostrarInfo()
califDany3.mostrarInfo()

califLuis1.mostrarInfo()
califLuis2.mostrarInfo()
califLuis3.mostrarInfo()