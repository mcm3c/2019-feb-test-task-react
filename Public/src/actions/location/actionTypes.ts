import { Action } from 'redux';
export const SET_LOCATION = 'SET_LOCATION';
export const LOCATIONS_RECEIVED = 'LOCATIONS_RECEIVED';

export interface SetLocation extends Action<typeof SET_LOCATION> {
  data: {
    locationId: number;
  };
}

export type LocationActions =
  | SetLocation;
