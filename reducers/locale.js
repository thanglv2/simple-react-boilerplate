const LOCALE_SET = 'LOCALE_SET';

const initialState = {
  lang: 'en',
}

export default function locale(state = initialState, action) {
  switch (action.type) {
    case LOCALE_SET:
      return { lang: action.lang };
    default:
      return state;
  }
}
