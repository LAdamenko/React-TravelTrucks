import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, findCamper } from './operations';

const campersSlice = createSlice({
    name: 'campers',
    initialState: {
      items: [],
      camperDetails: {},
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: builder => {
      builder
        .addCase(fetchCampers.pending, state => {
          state.error = false;
          state.loading = true;
        })
        .addCase(fetchCampers.fulfilled, (state, action) => {
          state.items = [...action.payload.items];
          state.loading = false;
        })
        .addCase(fetchCampers.rejected, state => {
          state.loading = false;
          state.error = true;
        })
        .addCase(findCamper.pending, state => {
          state.error = false;
          state.loading = true;
        })
        .addCase(findCamper.fulfilled, (state, action) => {
          state.camperDetails = action.payload;
          state.loading = false;
        })
        .addCase(findCamper.rejected, state => {
          state.loading = false;
          state.error = true;
        })
    },
});

export const campersReducer = campersSlice.reducer;

export default campersSlice.reducer;