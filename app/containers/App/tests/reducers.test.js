import appReducer from '../reducer'
import { setUsername } from '../actions'

describe('appReducer', () => {
  let state
  beforeEach(() => {
    state = {
      username: '',
    }
  })

  it('should return the initial state', () => {
    const expectedResult = state
    expect(appReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the setUsername action correctly', () => {
    const expectedResult = { ...state, username: 'test' }
    expect(appReducer(state, setUsername('test'))).toEqual(expectedResult)
  })
})
