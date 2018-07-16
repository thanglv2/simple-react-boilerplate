import mockAxios from 'axios';
import { fetchTrailerList } from '../service'

describe('fetchTrailerList()', () => {
  it('should return response api', async () => {
    let id;
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {},
      }));
    await fetchTrailerList(id)
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  })
})
