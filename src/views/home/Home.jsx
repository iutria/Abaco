//estilos
import "./home.css";
//componentes de ract
import React, { useEffect, useState, useContext } from "react";

//metodos
import { isTablet, isPhone } from "../../utils/responsive/GetResponsive";

//contexto
import { ProductoContext } from "../../state/ProductoContext";

//mis componentes
import Contenedor from "../../components/contenedor/Contenedor";
import Form from "../../components/form/Form";
import Modal from "../../components/modal/Modal";
import Tabla from "../../components/tabla/Tabla";

function Home() {
  //inicializacion de context
  const { add, productos, deleteObj, snapshot } = useContext(ProductoContext);

  const [esTablet, setEsTablet] = useState(false);
  const [esTelefono, setEsTelefono] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [esError, setesError] = useState(false);
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    snapshot();
    isTablet((value) => setEsTablet(value));
    isPhone((value) => setEsTelefono(value));
  }, [productos]);

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

  const editar = (event, obj)=>{
    event.preventDefault();
    setProducto(obj);
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
        <Form onAceptar={ guardar } data={ producto } />
      )}

        { mensaje }
        { esError }

      {esTablet || esTelefono ? <></> : <br />}

      <Modal id="exampleModal">
        <Form onAceptar={ guardar } data={ producto }/>
      </Modal>

      <Tabla editar={ editar } eliminar={ eliminar }/>
      
    </Contenedor>
  );
}

export default Home;
