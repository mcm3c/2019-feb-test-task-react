import { LocationChangeAction } from 'connected-react-router';
import { LocationActions } from './location/actionTypes';
import { JobsAsyncActions } from './asyncJobs/actionTypes';

export default RootActions;

type RootActions =
  | { type: 'TEST_ACTION' }
  | LocationActions
  | JobsAsyncActions
  | LocationChangeAction;
