import React, { useRef } from "react";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import './form.css'

function Form({ onAceptar, data }) {

  const nombre = useRef();
  const cantidad = useRef();
  const descripcion = useRef();
  const fecha = useRef();
  const precio = useRef();


  const aceptar = async (event) => {
    event.preventDefault();
    
    const producto = {
      nombre:  nombre.current.value,
      cantidad: cantidad.current.value,
      descripcion: descripcion.current.value,
      fecha: fecha.current.value,
      precio: precio.current.value,
    };
    
    onAceptar(producto);

  }

  const formulario = (
    <form onSubmit={ aceptar } className="card p-3  ">
      <div className="form-inputs-container">
        <Input
          texto='Nombre'
          id="nombre"
          referencia={ nombre }
        />
        <Input
          texto='Cantidad'
          id="cantidad"
          tipo="number"
          referencia={ cantidad }
        />
        <TextArea 
          texto="Descripción"
          id="descripcion"
          referencia={ descripcion }
          estilo={
            { 'gridColumn' : '1 / 3'}
          }
        />
        <Input
          texto='Fecha vencimiento'
          id="fecha-vencimiento"
          tipo="date"
          referencia={ fecha }
        />
        <Input
          texto='Precio'
          id="precio"
          tipo="number"
          referencia={ precio }
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Guardar
      </button>
    </form>
  );

  
  return <>{ formulario }</>;
}

export default Form;
