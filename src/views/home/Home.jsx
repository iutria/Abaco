import React, { useState, useRef } from "react";
import Form from "../../components/form/Form";
import "./home.css";
import Contenedor from "../../components/contenedor/Contenedor";
import { isTablet, isPhone } from "../../utils/responsive/GetResponsive";
import Modal from "../../components/modal/Modal";
import { add } from '../../utils/crud'
import { Toast } from "bootstrap";

function Home() {

  const [esTablet, setEsTablet] = useState(false);
  const [esTelefono, setEsTelefono] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [esError, setesError] = useState(false);

  isTablet((value) => setEsTablet(value));
  isPhone((value) => setEsTelefono(value));

  const liveToast = useRef();

  function mostrarToast() {
    const toast = new Toast(liveToast.current);
    toast.show();
  }

  const guardar = async (data)=>{
    console.log(data);

    
    try {
      const respuesta = await add(data);
      setMensaje('Guardado');
      setesError(false);
      mostrarToast();
      console.log('guardado');
    } catch (error) {
      console.log(error)
      setesError(true);
      setMensaje(error.toString());
      mostrarToast();
    }
  }

  return (
    <Contenedor>
      { esTablet || esTelefono ?  <button
        type="button"
        className={ `btn btn-primary floating-button ${esTablet ? 'esTablet' : ''}` }
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i className="bi bi-plus"></i>
      </button> : <Form onAceptar={ guardar } />}

      <Modal id="exampleModal"><Form onAceptar={ guardar }  /></Modal>
      
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          ref={liveToast}
          className={ `toast align-items-center ${ esError ? 'text-bg-danger' : 'text-bg-primary' } border-0` }
          role="alert"
          data-bs-delay="1000"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">{ mensaje }</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>

    </Contenedor>
  );
}

export default Home;
