import * as React from 'react';
import { Header } from 'components/header/header';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { requestJob } from 'actions/asyncJobs/actionCreators';
import RootState from 'store/RootState';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Job } from 'actions/asyncJobs/actionTypes';
import moment = require('moment');
import './job.scss';
import CircularProgress from '@material-ui/core/CircularProgress';

interface JobProps {
  id: string;
  selectedJob: Job;
}

interface JobState {
}

class JobComponent extends React.Component<JobProps & typeof dispatchProps, JobState> {
  constructor(props: JobProps & typeof dispatchProps) {
    super(props);
  }

  componentDidMount() {
    this.props.requestJob(this.props.id);
  }

  render() {
    return (
      <div>
        <Header></Header>
        {this.showJobDetails()}
      </div>
    );
  }

  showJobDetails() {
    if (this.props.selectedJob) {
      return <Paper>
        <Typography variant="h3" component="h3">
          {this.props.selectedJob.Name}
        </Typography>
        <div className="vacancy-date">{moment(new Date(this.props.selectedJob.DateAdded)).format('DD/MM/YYYY')}</div>
        <Typography component="p">
          {this.props.selectedJob.Description}
        </Typography>
      </Paper>;
    }

    return <CircularProgress></CircularProgress>;
  }
}

const dispatchProps = {
  requestJob,
};

export default connect(
  (state: RootState, props: any) => {
    return {
      id: props.match.params.id as string,
      selectedJob: state.jobs.selectedJob,
    };
  },
  dispatch => bindActionCreators(dispatchProps, dispatch),
)(JobComponent);
