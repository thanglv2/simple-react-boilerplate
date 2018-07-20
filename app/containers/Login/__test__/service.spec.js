import mockAxios from 'axios';
import { saveUserApi } from '../service'

describe('saveUserApi()', () => {
  it('should return response api', async () => {
    let data;
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: {},
      }));
    await saveUserApi(data);
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
  })
})
