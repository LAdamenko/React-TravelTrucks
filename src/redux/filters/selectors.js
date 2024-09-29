import { selectCampers } from "../campers/selectors";
import { statusFilters } from "./constants";

export const selectLocationFilter = state => state.filters.location;

export const selectStatusFilter = (state) => state.filters.status;

export const selectVisibleCampers = (state) => {
  const campers = selectCampers(state);
  const statusFilter = selectStatusFilter(state);

  switch (statusFilter) {
    case statusFilters.van:
      return campers.filter((camper) => camper.van);
    case statusFilters.fullyIntegrated:
      return campers.filter((camper) => camper.fullyIntegrated);
    case statusFilters.alcove:
      return campers.filter((camper) => camper.alcove);
    default:
      return campers;
  }
};