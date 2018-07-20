import { browserHistory } from 'react-router-dom';
import initilizeStore from '../store';

describe('store', () => {
  let store;
  beforeAll(() => {
    store = initilizeStore({}, browserHistory);
  });

  describe('injectReducer', () => {
    it('should return a', () => {
      let key;
      let reducer;
      expect(typeof store.injectReducer(key, reducer)).toBe('object');
    });
  });
});
