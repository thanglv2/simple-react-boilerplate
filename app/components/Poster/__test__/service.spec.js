import mockAxios from 'axios';
import { fetchMovieDetail } from '../service'

describe('fetchMovieDetail()', () => {
  it('should return response api', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {},
      }));
    await fetchMovieDetail()
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  })
})
