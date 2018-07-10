import { SAVE_USER } from '../constants'
import { saveUser } from '../action'

describe('saveUser reducer', () => {
  it('should return SAVE_USER type', () => {
    let payload;
    const expectedResult = {
      type: SAVE_USER,
      payload,
    };

    expect(saveUser(payload)).toEqual(expectedResult)
  })
})
