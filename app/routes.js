import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './containers/App'
import Learning from './containers/Learning'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/learning" component={Learning} />
    </Switch>
  </BrowserRouter>
)
