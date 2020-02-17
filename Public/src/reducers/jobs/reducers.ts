import {
  JOBS_RECEIVED,
  JOBS_FAILED,
  Job,
  JobsAsyncActions,
} from 'actions/asyncJobs/actionTypes';

export interface JobsState {
  jobs: Job[];
  selectedJob: Job | null;
  error: string;
}

const initialState = {
  jobs: [],
  selectedJob: null,
  error: 'oops',
} as JobsState;

export function jobs(state = initialState, action: JobsAsyncActions): JobsState {
  switch (action.type) {
    case JOBS_RECEIVED:
      return {
        ...state,
        jobs: state.jobs.concat(action.data.jobs),
      };
    // case JOB_RECEIVED:
    //   return { ...state, selectedJob: action.job };
    case JOBS_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
