// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl'
import Home from '../Home';
import Login from '../Login';
import MovieDetail from '../MovieDetail';
import messages from '../../../utils/messages'

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
        <Route path="/search/:searchText" component={Home} />
      </Switch>
    </BrowserRouter>
  </IntlProvider>
);

const mapStateToProps = state => ({
  lang: state.locale.lang,
})

export default connect(mapStateToProps)(App);
