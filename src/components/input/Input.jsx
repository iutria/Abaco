import React from 'react'

function Input({texto = '', tipo = 'text', id = '', mensaje, placeholder, clase, referencia}) {
  return (
    <div className={ `${ clase }` } >
        <label htmlFor={ id } className='form-label'>{ texto }</label>
        <input
          ref={ referencia }
          type= { tipo }
          placeholder= { placeholder ?? texto }
          className="form-control"
          id={ id }
        />
        <div className="form-text"> { mensaje } </div>
    </div>
  )
}

export default Input
