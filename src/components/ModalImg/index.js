import React, { useState } from 'react';
import Modal from 'react-modal';

import './modalStyle.css';

const customStyles = {
  content: {
    display: 'flex',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'transparent',
    border: 'none',
    borderRadius: '15px',
    zIndex: '999999',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    zIndex: '999999',
  }
};

const ModalImg = ({imgSrc}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  function openModal() {
    setIsOpen(true)
  }


  function closeModal() {
    setIsOpen(false)
  }
  return (
    <>
      <img src={imgSrc} onClick={openModal} alt="Jorj-lins" />
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Jorj-lins'
      >
        <img src={imgSrc} className='imgModalOpen' alt="Jorj-lins" />
      </Modal>
    </>
  )
}

export default ModalImg;