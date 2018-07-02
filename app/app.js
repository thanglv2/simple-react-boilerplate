import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import vi from 'react-intl/locale-data/vi';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from '../app/containers/App'
import initializeStore from './store'

const store = initializeStore();

addLocaleData([...en, ...vi]);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
