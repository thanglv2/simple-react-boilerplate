import axios from 'axios'
import { URL } from '../constant'
import { API_KEY } from '../../../../utils/constants';
import { recommendationsApi } from '../service'

describe('recommendationsApi()', () => {
  let id;
  const baseUrl = `${URL}${id}/recommendations?api_key=${API_KEY}`
  it('should return response api', () => {
    expect(recommendationsApi(id)).toEqual(axios.get(baseUrl))
  })
})
