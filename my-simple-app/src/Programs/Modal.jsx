import React from 'react'
import './Modal.css'

function Modal({isOpen, onClose, children}) {

    if(!isOpen) return null; //if modal not open return null

  return (
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal-box" onClick={(e)=> e.stopPropagation()}>
            <button className="modal-close" onClick={onClose}>
                &times;
            </button>
            <div className='modal-content'>{children}</div>  {/* children props includes all content inside the component calling*/}
        </div>
    </div>
  )
}

export default Modal