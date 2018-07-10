import axios from 'axios';

import { API_KEY_ALT } from '../../../../utils/constants';
import { URL_SEARCH } from '../constants';
import { searchMovieApi } from '../service'

describe('searchMovieApi()', () => {
  let searchText;
  const urlSearch = URL_SEARCH + searchText + API_KEY_ALT;
  it('should return response api', () => {
    expect(searchMovieApi(searchText)).toEqual(axios.get(urlSearch))
  })
})
