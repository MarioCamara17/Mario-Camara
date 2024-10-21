import React from 'react'

function Formulariocss() {
return (

    <form>
      <label for="nombre">Nombre: </label>
      <input type="text" name="nombre" placeholder="Escribe el nombre" id="nombre"/>
      <label for="apellidos">Apellidos: </label>
      <input type="text" name="apellidos" placeholder="Escribe el apellido" id="apellidos"/>
    </form> 
  )
}

export default Formulariocss