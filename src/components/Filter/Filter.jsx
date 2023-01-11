import React from 'react';
import { Input, Title } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };

  return (
    <label>
      <Title>Find contacts by name</Title>
      <Input
        value={filter}
        onChange={handleFilter}
        placeholder="Type to search"
      />
    </label>
  );
};

export default Filter;
