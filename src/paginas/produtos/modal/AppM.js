import React, { useState } from 'react';
import './Modal.css';
import Modal from './Modal';

function AppM() {
  const [openModal, setOpenModal] = useState(false);



  return (
    <div>
      <button 
      onClick={() => setOpenModal(true)} 
      className='modalButton'>
        Cadastrar
      </button>
      <Modal 
      open={openModal} 
      onClose={() => setOpenModal(false)} />
      </div>
  );
}

export default AppM;