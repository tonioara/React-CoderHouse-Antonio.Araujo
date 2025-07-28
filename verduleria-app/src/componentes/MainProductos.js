import React from 'react'
import '../Estilos/MainProductos.css'

function MainProductos({saludosBienvenida}) {
  return (
    <div className='main-productos'>
    
      <h1 className='mensaje-Bienvenida'> {saludosBienvenida} </h1>
      <h2 className='titulo-main'> Nuestro Catalofo de producto </h2>

      <div className='frutas-productos'>
        <h2 className='titulo-frutas'> Frutas </h2>
      </div>
      <div className='verduras-productos'>
       <h2 className='titulo-verduras'> Verduras </h2>
      </div>
      <div className='otros-productos'>
       <h2 className='titulo-otros'> Verduras </h2>
      </div>
    </div>
  )
}

export default MainProductos