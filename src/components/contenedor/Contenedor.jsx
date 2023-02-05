import React from 'react'
import './contenedor.css'
import Nav from '../nav/Nav'

function Contenedor({children}) {
  return (
    <div className='contenedor'>
      <Nav />
      <div className='contenido'>
        { children }
      </div>
    </div>
  )
}

export default Contenedor
