import { SET_USER_NAME } from '../constants'
import { setUsername } from '../actions'

describe('Learning Actions', () => {
  describe('setKeyword', () => {
    it('should return the correct type and the passed keyword', () => {
      const fixture = 'test'
      const expectedResult = {
        type: SET_USER_NAME,
        username: fixture,
      }

      expect(setUsername(fixture)).toEqual(expectedResult)
    })
  })
})
