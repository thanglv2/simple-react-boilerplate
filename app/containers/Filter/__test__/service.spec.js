import mockAxios from 'axios';
import { filterApi } from '../service'

describe('filterApi()', () => {
  it('should return response api', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {},
      }));
    await filterApi()
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  })
})

