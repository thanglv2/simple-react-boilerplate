import axios from 'axios';
import { URL_DETAIL } from '../../components/Poster/constants';
import { API_KEY } from '../../../utils/constants';

export function fetchMovieDetail(id) {
  const urlMovie = `${URL_DETAIL}${id}?api_key=${API_KEY}`;
  return axios.get(urlMovie);
}
