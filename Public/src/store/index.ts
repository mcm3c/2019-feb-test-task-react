import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootState from './RootState';
import RootActions from 'actions';
import reducers, { history } from 'reducers';
// import { routerMiddleware } from 'connected-react-router';

const initialState : RootState = {};

export function configureStore() {
  const store = createStore<
    RootState,
    RootActions,
    {},
    {}>(
    reducers,
    initialState,
    compose(
      applyMiddleware(
        thunk,
        // does it really needed?
        // routerMiddleware(history),
      ),
    ),
  );
  return store;
}
