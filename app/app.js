import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import vi from 'react-intl/locale-data/vi';
import { localeSet } from './containers/Home/actions'
import 'font-awesome/css/font-awesome.min.css';

import App from '../app/containers/App'
import initializeStore from './store'

const store = initializeStore();

addLocaleData([...en, ...vi]);

if (localStorage.lang) {
  store.dispatch(localeSet(localStorage.lang))
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
