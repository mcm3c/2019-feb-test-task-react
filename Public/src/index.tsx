import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { configureStore } from 'store';
import { Store } from 'redux';
import RootState from 'store/RootState';
import { history } from 'reducers';
import { Switch, Route, Redirect } from 'react-router';
import JobsList from 'components/jobs-list/jobs';
import JobComponent from 'components/job/job';
import { NotFound } from 'components/not-found/not-found';

interface AppProps {
  history: History;
}

interface AppState {
  test: boolean;
}

export class App extends React.Component<AppProps, AppState> {
  private store: Store<RootState>;

  constructor(props: AppProps) {
    super(props);
    this.state = { test: false };
    this.store = configureStore();
  }

  render() {
    if (this.state.test) {
      return 'test!';
    }
    console.log(123);

    return (
      <Provider store={this.store}>
        <ConnectedRouter history={history}>
          <>
            <Switch>
              <Route path="/" exact>
                <Redirect to="/jobs"></Redirect>
              </Route>
              <Route path="/jobs" exact component={JobsList} />
              <Route path="/jobs/:id" component={JobComponent} />
              <Route component={NotFound} />
            </Switch>
          </>
        </ConnectedRouter>
      </Provider>
    );
  }
}

const domContainer = document.querySelector('#app-root');
ReactDOM.render(React.createElement(App), domContainer);
