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
import { Location, Job } from 'actions/asyncJobs/actionTypes';
import * as moment from 'moment';
import { LOCATION_ALL } from 'reducers/location/reducers';

interface JobsListProps {
  locations: Location[];
  selectedLocation: Number;
}

interface JobsListState {
}

class JobsList extends React.Component<JobsListProps & typeof dispatchProps, JobsListState> {

  constructor(props: JobsListProps & typeof dispatchProps) {
    super(props);
  }

  componentDidMount() {
    this.props.requestJobs();
  }

  render() {

    console.log('this.state.locations', this.state);

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
              {this.props.locations.map((location: Location) => {
                return <MenuItem key={location.ID} value={location.ID}>{location.Name}</MenuItem>;
              })}
            </Select>
          </Typography>
          <div>

            {this.props.locations
              .filter((location) => {
                if (this.props.selectedLocation === LOCATION_ALL) {
                  return true;
                }
                return this.props.selectedLocation === location.ID;
              })
              .map((location: Location) => {
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
                            {job.Description}
                          </div>
                        </div>
                        <div className="vacancy-card-date">
                          <div className="vacancy-card-date-day">
                            {new Date(job.DateAdded).getDay()}
                          </div>
                          <div className="vacancy-card-date-month">
                            {moment(new Date(job.DateAdded)).format('MMM')}
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
    };
  },
  dispatch => bindActionCreators(dispatchProps, dispatch),
)(JobsList);
