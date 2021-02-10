import React from 'react';

import SaveButton from '../../components/SaveButton';
import CancelButton from '../../components/CancelButton';

import { Container, FilterButtons, FilterText } from './styles';

const FilterComponent = () => {
  return (
    <Container>
      <strong>Filtros Selecionados</strong>
      <span>Manaus - Amazonas</span>
      <FilterText>
        <span>Café, Almoço, Jantar</span>
      </FilterText>
      <FilterButtons>
        <SaveButton type='button' title='Filtros' />
        <CancelButton type='button' title='Limpar filtros' />
      </FilterButtons>
    </Container>
  )
}

export default FilterComponent;