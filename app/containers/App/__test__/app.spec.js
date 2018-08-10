
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App, mapStateToProps, Fragment, isLoggedIn } from '../index'
import Home from '../../Home';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      lang: 'lang',
      ...overrides,
    }

    component = shallow(<App {...mockProps} />)
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

describe('Fragment()', () => {
  it('should return props.children', () => {
    let children;
    expect(Fragment({ children })).toEqual(children)
  })
})

describe('isLoggedIn()', () => {
  it('should return false', () => {
    expect(isLoggedIn()).toEqual(false)
  })
  it('should return true', () => {
    const getItem = jest.spyOn(localStorage, 'getItem');
    getItem.mockReturnValue('test');
    expect(isLoggedIn()).toEqual(true)
  })
})
