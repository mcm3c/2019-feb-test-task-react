import {
  JOBS_RECEIVED,
  JOBS_FAILED,
  JOB_RECEIVED,
  Job,
  JobsAsyncActions,
  Location,
} from 'actions/asyncJobs/actionTypes';

export interface JobsState {
  locations: Location[];
  selectedJob: Job | null;
  error: string;
}

const initialState = {
  locations: [],
  selectedJob: null,
  error: 'oops',
} as JobsState;

export function jobs(state = initialState, action: JobsAsyncActions): JobsState {
  console.log(action);
  switch (action.type) {
    case JOBS_RECEIVED:
      return {
        ...state,
        locations: [...action.data.locations],
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
