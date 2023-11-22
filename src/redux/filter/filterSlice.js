import { createSlice } from '@reduxjs/toolkit';

import { filterInitialState } from './filterInitialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, { payload }) {
      state.filterKey = payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
