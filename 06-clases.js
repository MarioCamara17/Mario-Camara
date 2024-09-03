//Definir clases con atributos dentro del constructor

class persona{
    constructor(nombre,edad,sexo,direccion){
        this.nombre=nombre
        this.edad=edad
        this.sexo=sexo
        this.direccion=direccion
    }
//Metodo saludar
    saludar(){
        console.log(`Hola ${this.nombre}`)
    }
    //Encapsulamiento setter y getter
    get nombre(){
        return this._nombre

    }
    set nombre(values){
        this._nombre=values
    }
}


persona1 = new persona("Axl",18,"M","su casa")

console.log(persona1.edad)
persona1.saludar()