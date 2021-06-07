import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

import { configureStore } from '../redux';
import './app.css';

import { HomePage } from './home-page';

const store = configureStore();

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Link to="/home">Overview</Link>
        </div>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Redirect from="/*" to="/home" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
