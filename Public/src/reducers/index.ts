import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { jobs } from './jobs/reducers';

export const history = createBrowserHistory();
export default combineReducers({
  jobs,
  router: connectRouter(history),
});
