import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
  App,
  BreedOverview,
  FirstPage,
} from '../domains';

export default () => (
  <Router>
    <App>
      <Route exact={true} path="/" component={FirstPage} />
      <Route path="/breed/:breed" component={BreedOverview} />
    </App>
  </Router>
);
