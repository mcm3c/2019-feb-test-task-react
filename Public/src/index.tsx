
interface AppProps {
}

interface AppState {
  test: boolean;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { test: false };
  }

  render() {
    if (this.state.test) {
      return 'test!';
    }

    return (
      <button onClick={() => this.setState({ test: true })}>
        Wow, trivial app!!!
      </button>
    );
  }
}

const domContainer = document.querySelector('#app-root');
ReactDOM.render(React.createElement(App), domContainer);