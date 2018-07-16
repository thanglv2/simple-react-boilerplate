import mockAxios from 'axios';
import { searchMovieApi } from '../service'

describe('searchMovieApi()', () => {
  it('should return response api', async () => {
    let searchText;
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {},
      }));
    await searchMovieApi(searchText)
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  })
})
