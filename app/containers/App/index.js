// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl'
import Home from '../Home';
import Login from '../Login';
import ViewProfile from '../../components/ViewProfile'
import MovieDetail from '../MovieDetail';
import messages from '../../../utils/messages'
import WatchList from '../../components/WatchList'

type Props = {
  lang: string,
}
const App = ({ lang }: Props) => (
  <IntlProvider locale={lang} messages={messages[lang]}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/login" component={Login} />
        <Route path="/u/:username" exact component={ViewProfile} />
        <Route path="/search/:searchText" component={Home} />
        <Route path="/u/:username/watchlist" component={WatchList} />
      </Switch>
    </BrowserRouter>
  </IntlProvider>
);

const mapStateToProps = state => ({
  lang: state.locale.lang,
})

export default connect(mapStateToProps)(App);
