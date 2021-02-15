import React, { useEffect, useState } from 'react';
import api from '../../api/apiAxios'

import styled from 'styled-components';
import SaveButton from '../SaveButton';

const ModalFilter = () => {
  const [city, setCity] = useState(() => {
    if(localStorage.getItem('@POINT_CITY')) return localStorage.getItem('@POINT_CITY')
    else return ''
  });
  const [state, setState] = useState(() => {
    if(localStorage.getItem('@POINT_STATE')) return localStorage.getItem('@POINT_STATE')
    else return ''
  });
  const [filters, setFilters] = useState(([]));
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [selectedFilterName, setSelectedFilterName] = useState(['']);

  function handleSelect(id, name) {
    const alreadySelectedId = selectedFilter.findIndex(item => item === id);
    
    if (alreadySelectedId >= 0) {
      const filteredItems = selectedFilter.filter(item => item !== id);

      setSelectedFilter(filteredItems);
      setSelectedFilterName(name);
    } else {
      setSelectedFilter([...selectedFilter, id]);
      setSelectedFilterName([...selectedFilterName, name]);
    }
    console.log(selectedFilterName)
  }

  useEffect(() => {
    api.get('filters').then(response => {
      setFilters(response.data);
    });
  }, [])

  function handleConfirmFilters() {
    localStorage.setItem('@POINT_STATE', state)
    localStorage.setItem('@POINT_CITY', city)
    localStorage.setItem('@POINT_FILTER', selectedFilter)
    localStorage.setItem('@POINT_FILTER_NAME', selectedFilterName)
    window.location.reload();
  }

  return (
    <Container>
      <strong>Filtros</strong>
      <InputsLocation>
        <input
          placeholder='Estado'
          value={state}
          onChange={e => { setState(e.target.value) }}
        />
        <input 
          placeholder='Cidade'
          value={city}
          onChange={e => { setCity(e.target.value) }} 
        />
      </InputsLocation>
      <FiltersGrid>
        {filters.map(filter => (
          <li
            key={filter.id}
            onClick={() => handleSelect(filter.id, filter.name)}
            className={selectedFilter.includes(filter.id) ? 'selected' : ''}
          >
            <span>{filter.name}</span>
          </li>
        ))}
      </FiltersGrid>
      <SaveButton title='Aplicar' onClick={handleConfirmFilters}/>
    </Container>
  )
}

export default ModalFilter;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: #242930;
  border-radius: 30px;
  width: 730px;
  height: 510px;
  
  > strong {
    font-size: 35px;
  }
  
  > button {
    align-self: flex-end;
    margin-right: 15px;
    margin-top: 30px;
  }
`;

const InputsLocation = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  > input {
    width: 294px;
    height: 50px;
    border: none;
    padding: 15px;
    font-size: 18px;
    color: #DFDFE3;
    background: #2E353F;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.17);
    border-radius: 5px;

    ::placeholder {
      color: #DFDFE3;
      opacity: 0.8;
    }
  }
`;

const FiltersGrid = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 80px;
  
  > li {
    display: flex;
    width: 198px;
    height: 50px;
    margin-left: 13px;
    margin-top: 15px;

    background: #2E353F;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.17);
    border-radius: 5px;
    cursor: pointer;

    justify-content: center;
    align-items: center;
    transition: background 0.3s, transform 0.3s;

    > span {
      color: #DFDFE3;
      font-size: 18px;
    }

    :hover {
      background: #DFDFE3;
      > span {
        color: #2E353F;
      }
    }

    :active {
      transform: scale(0.95);
    }
  }

  .selected {
    display: flex;
    width: 198px;
    height: 50px;

    background: #DFDFE3;
    border: 3px solid #DFDFE3;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.17);
    border-radius: 5px;
    cursor: pointer;

    justify-content: center;
    align-items: center;

    > span {
      color: #2E353F;
      font-size: 18px;
    }
  }
`;
