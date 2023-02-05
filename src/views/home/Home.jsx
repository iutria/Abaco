import "./home.css";
import React, { useEffect, useState, useContext } from "react";
import Form from "../../components/form/Form";
import Contenedor from "../../components/contenedor/Contenedor";
import { isTablet, isPhone } from "../../utils/responsive/GetResponsive";
import Modal from "../../components/modal/Modal";
import { ProductoContext } from "../../state/ProductoContext";

function Home() {
  const { add, productos, deleteObj } = useContext(ProductoContext);

  const [esTablet, setEsTablet] = useState(false);
  const [esTelefono, setEsTelefono] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [esError, setesError] = useState(false);

  useEffect(() => {
    isTablet((value) => setEsTablet(value));
    isPhone((value) => setEsTelefono(value));
  }, []);

  const guardar = async (data) => {
    try {
      await add(data);
      setMensaje("Guardado");
      setesError(false);
    } catch (error) {
      setesError(true);
      setMensaje(error.toString());
    }
  };

  const eliminar = (event, id)=>{
    event.preventDefault();
    deleteObj(id);
  }

  return (
    <Contenedor>
      {esTablet || esTelefono ? (
        <button
          type="button"
          className={`btn btn-primary floating-button ${
            esTablet ? "esTablet" : ""
          }`}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i className="bi bi-plus"></i>
        </button>
      ) : (
        <Form onAceptar={guardar} />
      )}

        { mensaje }
        { esError }

      {esTablet || esTelefono ? <></> : <br />}

      <Modal id="exampleModal">
        <Form onAceptar={guardar} />
      </Modal>

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
                <button type="button" className="btn btn-primary me-2"><i className="bi bi-pencil-square"></i></button>
                <button type="button" onClick={ (event)=>eliminar(event, item.id) } className="btn btn-danger"><i className="bi bi-trash"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Contenedor>
  );
}

export default Home;
