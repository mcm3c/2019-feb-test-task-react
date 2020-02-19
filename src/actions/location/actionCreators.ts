import { SET_LOCATION, LocationActions } from './actionTypes';

export function setLocation(locationId: number): LocationActions {
  return {
    data: {
      locationId,
    },
    type: SET_LOCATION,
  };
}
