/* eslint-disable*/

import About from 'About';
import Examples from 'Examples';
import Main from 'Main';
import React from 'react';
import ReactDOM from 'react-dom';
import Weather from 'Weather';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);
