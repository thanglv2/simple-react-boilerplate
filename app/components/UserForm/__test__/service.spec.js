import mockAxios from 'axios';
import { updateUserApi } from '../service'

describe('updateUserApi()', () => {
  it('should return response api', async () => {
    let data;
    mockAxios.put.mockImplementationOnce(() =>
      Promise.resolve({
        data: {},
      }));
    await updateUserApi(data)
    expect(mockAxios.put).toHaveBeenCalledTimes(1);
  })
})
