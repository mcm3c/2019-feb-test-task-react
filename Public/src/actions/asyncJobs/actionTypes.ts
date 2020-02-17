import { Action } from 'redux';

export const JOBS_REQUESTED = 'JOBS_REQUESTED';
export const JOBS_RECEIVED = 'JOBS_RECEIVED';
export const JOBS_FAILED = 'JOBS_FAILED';

export interface Job {
  id: string;
}

export interface JobsReceived extends Action<typeof JOBS_RECEIVED> {
  data: {
    jobs: Job[];
  };
}
export interface JobsRequested extends Action<typeof JOBS_REQUESTED> { }
export interface JobsFailed extends Action<typeof JOBS_FAILED> {
  error: string;
}

export type JobsAsyncActions =
  | JobsReceived
  | JobsRequested
  | JobsFailed;
