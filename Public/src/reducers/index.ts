import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { jobs } from './jobs/reducers';
import { location } from './location/reducers';

export const history = createBrowserHistory();
export default combineReducers({
  jobs,
  location,
  router: connectRouter(history),
});
