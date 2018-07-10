import axios from 'axios'
import { URL_SORT } from './constants'
import { API_KEY } from '../../../utils/constants';

export function sortApi(sortBy) {
  const urlBase = `${URL_SORT}${API_KEY}&sort_by=${sortBy}`;

  return axios.get(urlBase);
}
