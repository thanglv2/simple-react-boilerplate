import mockAxios from 'axios';
import { fetchCastsApi } from '../service'

describe('fetchCastsApi()', () => {
  it('should return response api', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {},
      }));
    await fetchCastsApi()
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  })
})
