const prompt=require("prompt-sync")()
const porcentaje = 0.15
class Cooperativa{
    constructor(nombre,apellido,rfc,direccion,telefono,hrstra,cosxhra){
        this._nombre=nombre
        this._apellido=apellido
        this._rfc=rfc
        this._direccion=direccion
        this._telefono=telefono
        this._agrerarEn=[]
        this._sueldo=0
        this._cosxhra=cosxhra
        this._hrstra=hrstra
    }
    //getter
    //setter

    agregarEmp(){
        let tam=parseInt(prompt("Cantidad de empleados a dar de alta: "))
        for(let i=0;i<tam;i++){
            this._nombre=prompt("Ingrese el nombre del empleado: ")
            this._apellido=prompt("Ingrese el apellido del empleado: ")
            this._rfc=prompt("Ingrese el rfc del empleado: ")
            this._direccion=prompt("Ingrese la direccion del empleado: ")
            this._telefono=prompt("Ingrese el numero de telefono del empleado: ")
            this._hrstra=parseInt(prompt("Ingrese el numero de horas trabajadas: "))
            this._cosxhra=parseFloat(prompt("Ingrese el costo por hora:"))
            let empleado={
                nombre:this._nombre,
                hrstra:this._hrstra,
                cosxra:this._cosxhra,
                apellido:this._apellido,
                sueldo:this.calcularSueldo()
            }
            this._agrerarEn.push(empleado)
        }

    }

    eliminarEmp(){
        this._agrerarEn.length>0?this._agrerarEn.pop():console.log("No hay registros para eliminar")
    }

    calcularSueldo(){
        if(this._hrstra>8){
            this._sueldo=(this._cosxhra*this._hrstra)
            return this._sueldo=this._sueldo+(this._cosxhra*porcentaje*(this._hrstra-8))
        } else{
            return this._sueldo=this._hrstra*this._cosxhra
        }
    }
    mostrarEmpleados(){
        this._agrerarEn.length>0?this._agrerarEn.map((emp)=>{
            console.log(`El nombre es ${emp.nombre} y tiene un sueldo ${emp.sueldo}`)
        })
        : console.log("No hay empleados que mostrar")
    }
    menuLista(){
        let listar=parseInt(prompt("Que desea hacer: 1:Agregar, 2:Mostrar, 3:Eliminar, 4:Salir"))
        while(listar!=4){
            switch(listar){
                case 1:
                    this.agregarEmp()
                    break
                case 2:
                    this.mostrarEmpleados()
                case 3:
                    this.eliminarEmp()
                case 4:
                    break
            }
        }
    }
}

let empleados=new Cooperativa()
empleados.agregarEmp()
empleados.mostrarEmpleados()
empleados.eliminarEmp()


