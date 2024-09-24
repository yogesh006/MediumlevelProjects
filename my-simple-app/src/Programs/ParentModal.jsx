import React, { useState } from 'react'
import Modal from './Modal'

function ParentModal() {

    const[isModalOpen, setIsModalOpen]=useState(false)

    const openModal = ()=>{
        setIsModalOpen(true)
    }

    const closeModal=()=>{
        setIsModalOpen(false)
    }

  return (
    <div>
        <h1>Parent Modal : Reusable modal Example</h1>
        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2>Modal title</h2>
            <p>This is the content inside the modal. You can place any text here.</p>
        </Modal>
    </div>
  )
}

export default ParentModal