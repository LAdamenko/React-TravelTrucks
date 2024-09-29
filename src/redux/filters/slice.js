// import { createSlice } from '@reduxjs/toolkit';
// import { statusFilters } from './constants';

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// const filtersSlice = createSlice({
//   name: 'filters',
//   initialState: filtersInitialState,
//   reducers: {
//     setStatusFilter(state, action) {
//       state.status = action.payload;
//     },
//   },
// });

// export const { setStatusFilter } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
  },
  reducers: {
    setLocationFilter(state, action) {
      state.location = action.payload;
    },
  },
});

export const { setLocationFilter } = filtersSlice.actions;
// export default filtersSlice.reducer;
export const filtersReducer = filtersSlice.reducer;