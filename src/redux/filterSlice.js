import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { query: '' },
  reducers: {
    setFilter: (state, { payload }) => {
      state.query = payload;
    },
  },
});

export default filterSlice.reducer;

export const { setFilter } = filterSlice.actions;

export const getFilter = store => store.filter.query;
