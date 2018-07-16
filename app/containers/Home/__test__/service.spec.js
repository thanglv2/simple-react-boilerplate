import mockAxios from 'axios';
import { fetchMovieList } from '../service'

describe('fetchMovieList()', () => {
  it('should return response api', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {},
      }));
    await fetchMovieList()
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  })
})

