import React from 'react';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>

          <div className='content'>
            <h2>CADASTRAR PRODUTO</h2>

            <input placeholder='Nome do produto'></input>
            <input placeholder='Descrição do produto'></input>
            <input placeholder='Valor'></input>
            <input placeholder='Peso'></input>
            <input placeholder='Categoria'></input>
            
          </div>

          <div className='btnContainer'>

            <button className='btnOutline'>
              <span className='bold'>CADASTRAR</span>
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Modal;