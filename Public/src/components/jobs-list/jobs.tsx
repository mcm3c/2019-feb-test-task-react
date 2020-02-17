import * as React from 'react';
import { Link } from 'react-router-dom';

interface JobsListProps {
}

interface JobsListState {
}

export class JobsList extends React.Component<JobsListProps, JobsListState> {
  constructor(props: JobsListProps) {
    super(props);
  }

  render() {

    return (
      <div>
        here should be a list of jobs. <Link to="/jobs/123">Go to single job.</Link> <Link to="/somewhere">Go to error page.</Link>
      </div>
    );
  }
}
