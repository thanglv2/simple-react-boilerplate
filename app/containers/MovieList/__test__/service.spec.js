import mockAxios from 'axios';
import { getFilmsApi, saveFilmApi, updateFilmApi } from '../service'

describe('getFilmsApi()', () => {
  it('should return response api', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {},
      }));
    await getFilmsApi()
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  })
})

describe('saveFilmApi()', () => {
  it('should return response api', async () => {
    let data;
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: {},
      }));
    await saveFilmApi(data)
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
  })
})

describe('updateFilmApi()', () => {
  it('should return response api', async () => {
    let data;
    let id;
    mockAxios.patch.mockImplementationOnce(() =>
      Promise.resolve({
        data: {},
      }));
    await updateFilmApi(id, data)
    expect(mockAxios.patch).toHaveBeenCalledTimes(1);
  })
})
