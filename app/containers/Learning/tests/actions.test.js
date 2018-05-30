import { SET_KEYWORD } from '../constants'
import { setKeyword } from '../actions'

describe('Learning Actions', () => {
  describe('setKeyword', () => {
    it('should return the correct type and the passed keyword', () => {
      const fixture = 'react'
      const expectedResult = {
        type: SET_KEYWORD,
        keyword: fixture,
      }

      expect(setKeyword(fixture)).toEqual(expectedResult)
    })
  })
})
