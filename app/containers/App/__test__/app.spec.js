
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App, mapStateToProps } from '../index'

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      lang: 'lang',
      ...overrides,
    }

    component = shallow(<App {...mockProps} />)
    instance = component.instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('mapStateToProps', () => {
    it('should return an object', () => {
      const state = {
        locale: {
          lang: 'vi',
        },
      }
      const expectedResult = {
        lang: state.locale.lang,
      };

      expect(mapStateToProps(state)).toEqual(expectedResult);
    })
  })
})
