import * as React from 'react';
import { Link } from 'react-router-dom';

export class NotFound extends React.Component {

  render() {
    return (
      <div>
        <div>Page not found :'(</div>
        <div>Try to <Link to="/">come back</Link>.</div>
      </div>
    );
  }
}
