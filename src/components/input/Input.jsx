import React from 'react'

function Input({texto = '', tipo = 'text', id = '', value, mensaje, placeholder, clase, referencia, onChange}) {
  return (
    <div className={ `${ clase }` } >
        <label htmlFor={ id } className='form-label'>{ texto }</label>
        <input
          ref={ referencia }
          type= { tipo }
          placeholder= { placeholder ?? texto }
          className="form-control"
          id={ id }
          // value={ value }
          // onChange={ (event)=>{ onChange(value = event.target.value)} }
        />
        <div className="form-text"> { mensaje } </div>
    </div>
  )
}

export default Input
