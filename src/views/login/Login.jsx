import React from 'react'
import './login.css'
import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <div className='contenedor-form'>
      <form className='card card-form p-5'>
        <img className='logo' src={ Logo } alt="" />
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
          <input type="email" placeholder='Correo' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text text-danger"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Clave</label>
          <input type="password" placeholder='Clave' className="form-control" id="exampleInputPassword1" />
        </div>
        <NavLink className="btn btn-primary" to="/home">Iniciar</NavLink>
      </form>
    </div>
  )
}

export default Login
