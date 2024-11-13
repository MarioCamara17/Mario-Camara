import React from 'react';
import {Routes,Route} from "react-router-dom";

//Rutas absolutas
import ViewCalificaciones from '../componentes/calificaciones/ViewCalificaciones';
import Home from '../componentes/inicio/Home';

function Rutas() {
  return (
    <Routes>
         <Route path='/' element={<Home/>}/>
        <Route path='/calificaciones' element={<ViewCalificaciones/>}/>
    </Routes>
  )
}

export default Rutas