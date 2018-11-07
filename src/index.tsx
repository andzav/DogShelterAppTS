import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import routes from './app/routes';
// tslint:disable-next-line:import-name
import configureStore from './app/store';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {routes()}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
