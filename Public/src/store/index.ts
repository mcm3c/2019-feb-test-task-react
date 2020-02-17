import { createStore, compose, applyMiddleware } from 'redux';
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
    // does it really needed?
    // compose(
    //   applyMiddleware(
    //     routerMiddleware(history),
    //   ),
    // ),
  );
  return store;
}
