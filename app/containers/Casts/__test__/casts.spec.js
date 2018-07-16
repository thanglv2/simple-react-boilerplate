import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Casts, mapStateToProps } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Casts />', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      id: 1,
      casts: {},
      fetchCasts: jest.fn(),
      ...overrides,
    }

    component = shallow(<Casts {...mockProps} />)
    instance = component.instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('mapStateToProps', () => {
    it('should return an object', () => {
      const state = {
        castsReducer: { items: [] },
      }
      const expectedResult = {
        casts: state.castsReducer,
      };

      expect(mapStateToProps(state)).toEqual(expectedResult);
    })
  })
})
