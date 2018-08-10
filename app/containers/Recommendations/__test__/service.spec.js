import mockAxios from 'axios';
import { recommendationsApi } from '../service'

describe('recommendationsApi()', () => {
  it('should return response api', async () => {
    let searchText;
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {},
      }));
    await recommendationsApi(searchText)
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  })
})
