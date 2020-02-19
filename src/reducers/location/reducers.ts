import {
  SET_LOCATION,
  LocationActions,
} from 'actions/location/actionTypes';

export const LOCATION_ALL = -1;

export interface LocationState {
  locationId: number;
}

const initialState = {
  locationId: LOCATION_ALL,
} as LocationState;

export function location(state = initialState, action: LocationActions): LocationState {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        locationId: action.data.locationId,
      };
    default:
      return state;
  }
}
