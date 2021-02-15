import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import SaveButton from '../SaveButton';
import CancelButton from '../CancelButton';

import './modalStyle.css';

import { Container, FilterButtons, FilterText } from './styles';
import ModalFilter from '../ModalFilter';
import api from '../../api/apiAxios';

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

const FilterComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function handleDeleteFilters() {
    localStorage.removeItem('@POINT_FILTER')
    localStorage.removeItem('@POINT_FILTER_NAME')
    window.location.reload();
  }

  return (
    <Container>
      <strong>Filtros Selecionados</strong>
      <span>{localStorage.getItem('@POINT_CITY')} - {localStorage.getItem('@POINT_STATE')}</span>
      <FilterText>
        <span>{localStorage.getItem('@POINT_FILTER_NAME')}</span>
      </FilterText>
      <FilterButtons>
        <SaveButton type='button' onClick={openModal} title='Filtros' />
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Filtros'
        >
         <ModalFilter /> 
        </Modal>
        <CancelButton type='button' onClick={handleDeleteFilters} title='Limpar filtros' />
      </FilterButtons>
    </Container>
  )
}

export default FilterComponent;