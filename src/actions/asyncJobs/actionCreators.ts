import {
  JobsAsyncActions,
  JOBS_RECEIVED,
  JOBS_FAILED,
  JOB_RECEIVED,
} from './actionTypes';
import { ThunkAction } from 'redux-thunk';
import RootState from 'store/RootState';
import * as Config from 'config/environment.json';
import { LOCATION_ALL } from 'reducers/location/reducers';

export function requestJobs(locationId?: number)
  : ThunkAction<void, RootState, void, JobsAsyncActions> {
  return async (dispatch) => {
    try {
      const locationFilter = locationId && locationId !== LOCATION_ALL ? `($filter = LocationID eq ${locationId})` : '';
      const jobsResponse = await fetch(`${Config.jobsApiUrl}Locations?$expand=Jobs${locationFilter}&$filter=Jobs/any()`);
      const jobs = await jobsResponse.json();
      dispatch(receivedJobs(jobs.value));
    } catch (error) {
      dispatch(failedJobs(error));
    }
  };
}

export function receivedJobs(data: any): JobsAsyncActions {
  return {
    data,
    type: JOBS_RECEIVED,
  };
}

export function requestJob(id: string):
  ThunkAction<void, RootState, void, JobsAsyncActions> {
  return async (dispatch) => {
    try {
      const jobsResponse = await fetch(`${Config.jobsApiUrl}Jobs?$filter=ID eq ${id}`);
      const jobs = await jobsResponse.json();
      dispatch(receivedJob(jobs.value ? jobs.value[0] : null));
    } catch (error) {
      dispatch(failedJobs(error));
    }
  };
}

export function receivedJob(job: any): JobsAsyncActions {
  return {
    job,
    type: JOB_RECEIVED,
  };
}

export function failedJobs(error: string): JobsAsyncActions {
  return {
    error,
    type: JOBS_FAILED,
  };
}
