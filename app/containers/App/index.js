// @flow

import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl'
import Home from '../Home';
import ViewProfile from '../../components/ViewProfile'
import MovieDetail from '../MovieDetail';
import messages from '../../../utils/messages'
import WatchList from '../WatchList'
import EditProfile from '../../components/EditProfile'

export function Fragment(props) {
  return props.children;
}

type Props = {
  lang: string,
}

export const isLoggedIn = () => {
  const userId = localStorage.getItem('userId');
  if (userId) {
    return true;
  }
  return false;
};

export const App = ({ lang }: Props) => (
  <IntlProvider locale={lang} messages={messages[lang]} textComponent={Fragment}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/search/:searchText" component={() => <Home />} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/u/:username" exact render={() => (isLoggedIn() ? <ViewProfile /> : <Redirect to="/" />)} />
        <Route path="/u/:username/watchlist" render={() => (isLoggedIn() ? <WatchList /> : <Redirect to="/" />)} />
        <Route path="/settings/profile" render={() => (isLoggedIn() ? <EditProfile /> : <Redirect to="/" />)} />
      </Switch>
    </BrowserRouter>
  </IntlProvider>
);

export const mapStateToProps = state => ({
  lang: state.locale.lang,
})

export default connect(mapStateToProps)(App);
