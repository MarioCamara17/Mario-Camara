//factory function
/*const persona={
    nombre:"Mario",
    edad:19
}
const persona2={
    nombre:"Jose",
    edad:25
} */

function datosPersona(nombre,edad){
    return{
        nombre,
        edad,
        active:true   
    }
}

let persona1=datosPersona(`Mario`,19);
let persona2=datosPersona(`Juan`,25);
//console.log(persona1,persona2)
//camel case
const datosUsuario={
    nombre:"Mario",
    edad:19,
    password:1234455,
    direccion:{
        colonia:"El carmen",
        Calle:"Principal",
        numExt:123
    },
    sueldo:234.24,
    guardarUsuario:function(){
        console.log("Guardar usuario.....")
    }
}
//datosUsuario.guardarUsuario()

//Add registros y parámetros a los objetos definidos 
/* const user ={id:1}
user.nombre="Mario"
user.guardarUser=function(){
    console.log("Guardando user....")
}

console.log(user);
user.guardarUser() */

//objetos definidos
//freeze se utiliza para "congelar" el objeto, no permitiendo añadir o modificar sus claves y valores
/* const person=Object.freeze({id:1,nombre:"Mario"})
person.id=2
person.nombre="Axl"
person.edad=23

console.log(person) */

//Seal se usa para modificar valores del objeto sin añadir claves nuevas
const person=Object.seal({id:1,nombre:"Mario"})
person.id=2
person.nombre="Axl"
person.edad=23

//console.log(person)

//Pasar funciones como parámetros 
function pitbull(nombre){
    this.nombre=nombre
}
function Animal(Fn,argumento){
    return new Fn(argumento)
}

let animal1 = Animal(pitbull,"Rocky")
console.log(animal1);