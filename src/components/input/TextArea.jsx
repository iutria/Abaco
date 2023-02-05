import React from 'react'

function TextArea({texto = '', id = '', mensaje, placeholder, clase, filas = '3', estilo, referencia}) {
  return (
    <div className={ `${ clase }` } style={ estilo } >
        <label htmlFor={ id } className="form-label">{ texto }</label>
        <textarea ref={ referencia } placeholder={ placeholder ?? texto } className="form-control" id={ id } rows={ filas }></textarea>
        <div className="form-text"> { mensaje } </div>
    </div>
  )
}

export default TextArea
