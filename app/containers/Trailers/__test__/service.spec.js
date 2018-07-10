import axios from 'axios'
import { URL_DETAIL } from '../../MovieDetail/constants'
import { API_KEY } from '../../../../utils/constants';
import { URL_VIDEO } from '../constants'
import { fetchTrailerList } from '../service'

describe('fetchTrailerList', () => {
  it('should return response api', () => {
    let id;
    const urlTrailers = `${URL_DETAIL}${id}${URL_VIDEO}?api_key=${API_KEY}`

    expect(fetchTrailerList(id)).toEqual(axios.get(urlTrailers))
  })
})
