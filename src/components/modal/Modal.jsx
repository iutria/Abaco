import React from 'react'

function Modal({children, titulo, id = ''}) {
  return (
    <div
        className="modal fade"
        id={ id }
        tabIndex="-1"
        aria-labelledby={ `${id}Label` }
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false" 
    >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={ `${id}Label` }>
                { titulo }
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              { children }
            </div>
          </div>
        </div>
      </div>
  )
}

export default Modal
