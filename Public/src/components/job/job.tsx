import * as React from 'react';

interface JobProps {
}

interface JobState {
}

export class Job extends React.Component<JobProps, JobState> {
  constructor(props: JobProps) {
    super(props);
  }

  render() {

    return (
      <div>
        here should be a single job
      </div>
    );
  }
}
