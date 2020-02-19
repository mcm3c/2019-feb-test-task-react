import * as React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../header/header';
import { AccessTime, DirectionsBike, BeachAccess, Room } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { requestJobs } from 'actions/asyncJobs/actionCreators';
import { setLocation } from 'actions/location/actionCreators';
import { connect } from 'react-redux';
import './jobs.scss';
import RootState from 'store/RootState';
import { bindActionCreators } from 'redux';
import { JobLocation, Job } from 'actions/asyncJobs/actionTypes';
import * as moment from 'moment';

interface JobsListProps {
  locations: JobLocation[];
  selectedLocation: number;
  error: string;
}

interface JobsListState {
}

class JobsList extends React.Component<JobsListProps & typeof dispatchProps, JobsListState> {

  constructor(props: JobsListProps & typeof dispatchProps) {
    super(props);
  }

  componentDidMount() {
    this.props.requestJobs(this.props.selectedLocation);
  }

  render() {

    if (this.props.error) {
      // nice error message here
      console.log(this.props.error);
      alert('Something went wrong, try again later :(');
    }

    return (
      <div>
        <Header></Header>
        <div className="vacancies-image">
          <img src="/assets/persons.jpeg" />
          <div className="vacancies-moto">
            Love your career, it's worth it
          </div>
        </div>
        <div className="vacancies-perks-list">
          <Card className="vacancies-perk-card">
            <div className="vacancies-perk-card-icon">
              <AccessTime></AccessTime>
            </div>
            Flexible work hours to suit your lifestyle
          </Card>

          <Card className="vacancies-perk-card">
            <div className="vacancies-perk-card-icon">
              <DirectionsBike></DirectionsBike>
            </div>
            A new bike to get around town!
          </Card>

          <Card className="vacancies-perk-card">
            <div className="vacancies-perk-card-icon">
              <BeachAccess></BeachAccess>
            </div>
            Discounted health insurance
          </Card>

          <Card className="vacancies-perk-card">
            <div className="vacancies-perk-card-icon">
              <Room></Room>
            </div>
            Contemporary offices in a great location
          </Card>
        </div>

        <Paper className="vacancies-list">
          <Typography variant="h3" component="h3" className="vacancies-list-header">
            <div>
              Our Vacancies
            </div>
            <Select
              value={this.props.selectedLocation}
              onChange={this.setLocation.bind(this)}
            >
              <MenuItem value={-1}>All locations</MenuItem>
              {this.props.locations.map((location: JobLocation) => {
                return <MenuItem key={location.ID} value={location.ID}>{location.Name}</MenuItem>;
              })}
            </Select>
          </Typography>
          <div>

            {this.props.locations.map((location: JobLocation) => {
              return location.Jobs.map((job: Job) => {
                return <Link
                  key={`${location.ID}-${job.ID}` }
                  to={`/jobs/${job.ID}`}
                  style={{ textDecoration: 'none' }}
                  >
                    <Card className="vacancy-card">
                      <div className="vacancy-card-content">
                        <div className="vacancy-card-header">
                          <div className="vacancy-card-title">
                            {job.Name}
                          </div>
                          <div className="vacancy-card-location">
                            {location.Name}
                          </div>
                        </div>
                        <div className="vacancy-card-description">
                          {
                            job.Description.length > 130 ?
                              `${job.Description.substring(0, 130)}...` :
                              job.Description
                          }
                        </div>
                      </div>
                      <div className="vacancy-card-date">
                        <div className="vacancy-card-date-day">
                          {moment(job.DateAdded).format('DD')}
                        </div>
                        <div className="vacancy-card-date-month">
                          {moment(job.DateAdded).format('MMM')}
                        </div>
                      </div>

                    </Card>
                  </Link>;
              });
            })}

          </div>
        </Paper>

      </div>
    ) ;
  }

  setLocation(event: React.ChangeEvent<{ value: number; }>) {
    this.props.setLocation(event.target.value);
    this.props.requestJobs(event.target.value);
  }
}

const dispatchProps = {
  requestJobs,
  setLocation,
};

export default connect(
  (state: RootState) => {
    return {
      locations: state.jobs.locations,
      selectedLocation: state.location.locationId,
      error: state.jobs.error,
    };
  },
  dispatch => bindActionCreators(dispatchProps, dispatch),
)(JobsList);
