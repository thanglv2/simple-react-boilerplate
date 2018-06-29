import axios from 'axios'
import { URL_SORT } from './constants'
import { API_KEY } from '../../../utils/constants';

const sortApi = (sortBy) => {
  const urlBase = `${URL_SORT}${API_KEY}&sort_by=${sortBy}`;
  console.log(urlBase, '???????');

  console.log(axios.get(urlBase))

  return axios.get(urlBase);
}

export default sortApi
