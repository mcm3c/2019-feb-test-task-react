import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

interface AppProps {
}

interface AppState {
  test: boolean;
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { test: false };
  }

  render() {
    if (this.state.test) {
      return 'test!';
    }
    console.log(123);

    return (
      <button onClick={() => this.setState({ test: true })}>
        Wow, trivial app?!
      </button>
    );
  }
}

const domContainer = document.querySelector('#app-root');
ReactDOM.render(React.createElement(App), domContainer);