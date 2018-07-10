import axios from 'axios';
import { URL_DETAIL } from '../constants';
import { API_KEY } from '../../../../utils/constants';
import { fetchMovieDetail } from '../service'

describe('fetchMovieDetail()', () => {
  let id;
  it('should return api respone', () => {
    const urlMovie = `${URL_DETAIL}${id}?api_key=${API_KEY}`;
    expect(fetchMovieDetail(id)).toEqual(axios.get(urlMovie))
  })
})
