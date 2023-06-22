import React, { useContext } from 'react';
import { ProductoContext } from "../../state/ProductoContext";

function Tabla({ editar, eliminar }) {

    const { productos } = useContext(ProductoContext);

  return (
    <div className="card" style={{ overflow: "hidden", padding: "0" }}>
        <table
          className="table table-dark table-striped"
          style={{ margin: "0px" }}
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Fecha venciniento</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((item, index) => (
              <tr key={index}>
                <th>{index}</th>
                <td>{item.nombre}</td>
                <td>{item.precio}</td>
                <td>{item.cantidad}</td>
                <td>{item.fecha}</td>
                <td>
                <button type="button" onClick={ (event)=>editar(event, item) } className="btn btn-primary me-2"><i className="bi bi-pencil-square"></i></button>
                <button type="button" onClick={ (event)=>eliminar(event, item.id) } className="btn btn-danger"><i className="bi bi-trash"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default Tabla
