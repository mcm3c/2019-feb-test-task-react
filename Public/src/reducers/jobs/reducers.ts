import {
  JOBS_RECEIVED,
  JOBS_FAILED,
  JOB_RECEIVED,
  Job,
  JobsAsyncActions,
  JobLocation,
} from 'actions/asyncJobs/actionTypes';

export interface JobsState {
  locations: JobLocation[];
  selectedJob: Job | null;
  error: string;
}

const initialState = {
  locations: [],
  selectedJob: null,
  error: null,
} as JobsState;

export function jobs(state = initialState, action: JobsAsyncActions): JobsState {
  switch (action.type) {
    case JOBS_RECEIVED:
      return {
        ...state,
        locations: [...action.data],
      };
    case JOB_RECEIVED:
      return { ...state, selectedJob: action.job };
    case JOBS_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
