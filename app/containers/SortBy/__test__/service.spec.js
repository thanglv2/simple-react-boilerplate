import axios from 'axios'
import { URL_SORT } from '../constants'
import { API_KEY } from '../../../../utils/constants';

import { sortApi } from '../service'

describe('sortApi()', () => {
  let sortBy;
  const urlBase = `${URL_SORT}${API_KEY}&sort_by=${sortBy}`;
  it('should return response api', () => {
    expect(sortApi(sortBy)).toEqual(axios.get(urlBase))
  })
})
