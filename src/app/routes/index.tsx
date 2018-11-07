import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
  App,
  BreedOverview,
  FirstPage,
  Home,
} from '../domains';

export default () => (
  <Router>
    <App>
      <Route exact={true} path="/" component={FirstPage} />
      <Route exact={true} path="/home" component={Home} />
      <Route path="/breed/:breed" component={BreedOverview} />
    </App>
  </Router>
);
