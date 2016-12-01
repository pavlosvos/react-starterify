import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import PoweredBy from './components/Powered-by';
import About from './components/About';

import configureStore from './redux/store';

window.React = React;

let initialState  = {
  todos: [{
    id:0,
    completed: false,
    text: 'Initial todo '
  }]
}

let store = configureStore(initialState)

render(
  <Provideer store={store}>
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/poweredby" component={PoweredBy} />
    </Route>
  </Router>), document.getElementById('content')
);
