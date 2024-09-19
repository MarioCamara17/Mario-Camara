//UML Unity Modified Language


class Persona{
    constructor(nombre,apellidos,edad,sexo,direccion,telefono,correo,hora){
        this._nombre=nombre
        this._apellidos=apellidos
        this._edad=edad
        this._sexo=sexo
        this._direccion=direccion
        this._telefono=telefono
        this._correo=correo
        this._hora=hora
    }
}

class Alumno extends Persona{
    constructor(nombre,apellidos,hora,matricula,carrera,semestre){
    super(nombre,apellidos,hora)
    this._nombre=nombre
    this._matricula=matricula
    this._carrera=carrera
    this._semestre=semestre
    }
    mensaje(){
        console.log(`Soy el alumno ${this._nombre} y estudio la carrera de ${this._carrera}`);
    }
}

let alumno1 = new Alumno("Angel","Perez","10-16","23E20128","Sistemas","3") 
alumno1.mensaje()