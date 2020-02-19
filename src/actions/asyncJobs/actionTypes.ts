import { Action } from 'redux';

export const JOBS_REQUESTED = 'JOBS_REQUESTED';
export const JOBS_RECEIVED = 'JOBS_RECEIVED';
export const JOBS_FAILED = 'JOBS_FAILED';
export const JOB_REQUESTED = 'JOBS_REQUESTED';
export const JOB_RECEIVED = 'JOB_RECEIVED';
export const JOB_FAILED = 'JOBS_FAILED';

export interface JobLocation {
  ID: number;
  Name: string;
  State: string;
  Jobs: Job[];
}

export interface Job {
  ID: number;
  Name: string;
  LocationID: number;
  Description: string;
  DateAdded: string;
}

export interface JobsReceived extends Action<typeof JOBS_RECEIVED> {
  data: JobLocation[];
}
export interface JobsRequested extends Action<typeof JOBS_REQUESTED> { }
export interface JobsFailed extends Action<typeof JOBS_FAILED> {
  error: string;
}

export interface JobReceived extends Action<typeof JOB_RECEIVED> {
  job: Job;
}
export interface JobRequested extends Action<typeof JOB_REQUESTED> { }
export interface JobFailed extends Action<typeof JOB_FAILED> {
  error: string;
}

export type JobsAsyncActions =
  | JobsReceived
  | JobsRequested
  | JobsFailed
  | JobReceived
  | JobRequested
  | JobFailed;
