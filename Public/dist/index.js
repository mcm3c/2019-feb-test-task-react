class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { test: false };
    }
    render() {
        if (this.state.test) {
            return 'test!';
        }
        return (React.createElement("button", { onClick: () => this.setState({ test: true }) }, "Wow, trivial app!!!"));
    }
}
const domContainer = document.querySelector('#app-root');
ReactDOM.render(React.createElement(App), domContainer);
//# sourceMappingURL=index.js.map