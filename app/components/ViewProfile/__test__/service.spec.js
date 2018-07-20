import axios from 'axios'
import { URL_GET_USER } from '../constant'
import { fetchUserApi } from '../service'

describe('fetchUserApi', () => {
  it('should return response api', () => {
    expect(fetchUserApi()).toEqual(axios.get(URL_GET_USER))
  })
})
