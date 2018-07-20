import reducer from '../locale'

describe('locale reducer', () => {
  const initialState = {
    lang: 'en',
  }

  const LOCALE_SET = 'LOCALE_SET';

  it('should return initialState if no type of action is provided', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  })

  it('should handle LOCALE_SET type', () => {
    let state;
    const lang = 'vi';
    const action = {
      type: LOCALE_SET,
      lang,
    };
    expect(reducer(state, action).lang).toEqual(lang)
  })
})
