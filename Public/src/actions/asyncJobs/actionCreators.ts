import {
  JobsAsyncActions,
  JOBS_REQUESTED,
  JOBS_RECEIVED,
  JOBS_FAILED,
  JOB_REQUESTED,
  JOB_RECEIVED,
  JOB_FAILED,
  Job,
} from './actionTypes';
import { ThunkAction } from 'redux-thunk';
import RootState from 'store/RootState';

export function requestJobs(locationId?: number)
  : ThunkAction<void, RootState, void, JobsAsyncActions> {
  return (dispatch) => {

    setTimeout(
      () => {
        dispatch(
          receivedJobs({
            locations: [
              {
                ID: 3,
                Name: 'Sydney',
                State: 'There',
                Jobs: [
                  {
                    ID: 2,
                    LocationID: 3,
                    Name: 'Wow, job?',
                    Description: 'Job description',
                    DateAdded: new Date().getTime(),
                  },
                ],
              },
              {
                ID: 4,
                Name: 'Baltimore',
                State: 'Here',
                Jobs: [
                  {
                    ID: 3,
                    LocationID: 4,
                    Name: 'Wow, job!',
                    Description: 'Another Job description',
                    DateAdded: new Date().getTime(),
                  },
                ],
              },
            ],
          }),
        );
      },
      1000,
    );
    /* const jobsRequest = fetch('/api/jobs')
      .then(response => response.json());

    return jobsRequest.then(res => {
      dispatch(receivedJobs(data));
    }); */
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
  return (dispatch) => {
    setTimeout(
      () => {
        dispatch(
          receivedJob({
            ID: 2,
            LocationID: 3,
            Name: 'Wow, job?',
            Description: 'Job description',
            DateAdded: new Date().getTime(),
          }),
        );
      },
    );
    /* fetch(`/api/posts/${id}`)
      .then(res => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(receivedPost(res));
      })
      .catch((error) => {
        dispatch(failedPosts(error));
      }); */
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
