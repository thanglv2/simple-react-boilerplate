import axios from 'axios';
import { URL_LIST } from './constants';
import { API_KEY } from '../../../utils/constants';

const baseUrl = `${URL_LIST}${API_KEY}`;

export const fetchMovieList = () => axios.get(baseUrl)
