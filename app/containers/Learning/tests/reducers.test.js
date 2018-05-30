import learningReducer from '../reducer'
import { setKeyword } from '../actions'

describe('learningReducer', () => {
  let state
  beforeEach(() => {
    state = {
      keyword: '',
    }
  })

  it('should return the initial state', () => {
    const expectedResult = state
    expect(learningReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the setKeyword action correctly', () => {
    const expectedResult = { ...state, keyword: 'react' }

    expect(learningReducer(state, setKeyword('react'))).toEqual(expectedResult)
  })
})
