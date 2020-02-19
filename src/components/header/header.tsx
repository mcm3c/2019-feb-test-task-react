import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class Header extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Awesome Co.
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
