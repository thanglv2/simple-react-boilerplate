import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import MovieDetail from '../MovieDetail';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movie/:id" component={MovieDetail} />
      <Route path="/login" component={Login} />
      <Route path="/search/:searchText" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
