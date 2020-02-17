
interface JobsListProps {
}

interface JobsListState {
  test: boolean;
}

class JobsList extends React.Component<JobsListProps, JobsListState> {
  constructor(props: JobsListProps) {
    super(props);
    this.state = { test: false };
  }

  render() {
    if (this.state.test) {
      return 'test!';
    }

    return (
      <button onClick={() => this.setState({ test: true })}>
        Wow, trivial app?
      </button>
    );
  }
}
