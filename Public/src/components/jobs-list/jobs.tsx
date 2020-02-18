import * as React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../header/header';
import { AccessTime, DirectionsBike, BeachAccess, Room } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './jobs.scss';

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
            <Select defaultValue="all">
              <MenuItem value="all">All locations</MenuItem>
              <MenuItem value="3">Sydney</MenuItem>
              <MenuItem value="4">Brisbane</MenuItem>
            </Select>
          </Typography>
          <div>

            <Card className="vacancy-card">
              <div className="vacancy-card-content">
                <div className="vacancy-card-header">
                  <div className="vacancy-card-title">
                    Test title
                  </div>
                  <div className="vacancy-card-location">
                    Location
                  </div>
                </div>
                <div className="vacancy-card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
              <div className="vacancy-card-date">
                <div className="vacancy-card-date-day">
                  1
                </div>
                <div className="vacancy-card-date-month">
                  February
                </div>
              </div>

            </Card>
          </div>
        </Paper>

        {/* here should; be a l;ist; o;f job;s. ;<Link to ="/j;obs / 123">Go to  s in;gle; job.</; Link>; <Link  to="/somewhere">Go to error page.</Link> */}
      </div>
    ) ;
  }
}
