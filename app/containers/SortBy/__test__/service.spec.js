import mockAxios from 'axios';
import { sortApi } from '../service'

describe('sortApi()', () => {
  it('should return response api', async () => {
    let id;
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {},
      }));
    await sortApi(id)
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  })
})
