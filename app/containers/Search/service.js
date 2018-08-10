import axios from 'axios';

import { API_KEY_ALT } from '../../../utils/constants';
import { URL_SEARCH } from './constants';

export function searchMovieApi(searchText) {
  const urlSearch = URL_SEARCH + searchText + API_KEY_ALT;
  return axios.get(urlSearch);
}
