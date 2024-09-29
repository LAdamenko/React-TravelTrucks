import { createSelector } from '@reduxjs/toolkit';
import { selectLocationFilter } from '../filters/selectors';

export const selectCampers = state => state.campers.items;

export const selectLoading = state => state.campers.loading;

export const selectError = state => state.campers.error;

export const selectCamperDetails = (state) => state.campers.camperDetails;

export const selectFilteredCampers = createSelector(
    [selectCampers, selectLocationFilter],
    (campers, filter) => {
      if (!filter) {
        return campers;
      }
      return campers.filter(
        camper =>
          camper.location.includes(filter)
      );
    }
  );