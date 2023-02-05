import React from "react";
import "./nav.css";
import logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';

function Nav() {
  
  const selected = ( active ) => (active ? "item-nav selected" : "item-nav");

  return (
    <div className="navbar-iu">
      <NavLink className="item-nav logo-nav selected" to="/home">
        <img src={logo} alt="" width="30px" /> <span className="ocultar-responsive-tablet">Abaco</span>
      </NavLink>
      <hr className="ocultar-responsive-phone" />
      <ul>
        <li>
          <NavLink className={ ({ isActive })=>selected(isActive) } to="/home">
            <i className="bi bi-box"></i> <span className="ocultar-responsive-phone ocultar-responsive-tablet">Productos</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={ ({ isActive })=>selected(isActive) }  to="/facturas">
            <i className="bi bi-paperclip"></i> <span className="ocultar-responsive-phone ocultar-responsive-tablet">Facturas</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={ ({ isActive })=>selected(isActive) }  to="/configuracion">
            <i className="bi bi-gear"></i> <span className="ocultar-responsive-phone ocultar-responsive-tablet">Configuración</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={ ({ isActive })=>selected(isActive) }  to="/creer">
            <i className="bi bi-gear"></i> <span className="ocultar-responsive-phone ocultar-responsive-tablet">Creer</span>
          </NavLink>
        </li>
      </ul>
      <div className="user">
        <span className="ocultar-responsive-tablet">
          <img src='https://robohash.org/190.60.34.43.png' alt="" width="30px" />  Usuario
        </span>
        <div className="dropup">
          <button
            className=""
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-three-dots-vertical"></i>
          </button>
          <ul className="dropdown-menu">
            <li>
              <NavLink className="dropdown-item" to="/">
                Action
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/">
                Another action
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/">
                Something else here
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
