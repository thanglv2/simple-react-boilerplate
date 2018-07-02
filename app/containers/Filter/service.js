import axios from 'axios'
import { URL_FILTER } from './constants'
import { API_KEY } from '../../../utils/constants';

const filterApi = (filter) => {
  const urlBase = `${URL_FILTER}${API_KEY}&certification_country=${filter}|&primary_release_year=${filter}`;

  return axios.get(urlBase);
}

export default filterApi
