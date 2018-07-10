import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Facebook } from '../index'

Enzyme.configure({ adapter: new Adapter() });

describe('<Facebook />', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      history: {},
      saveUser: jest.fn(),
      ...overrides,
    }

    component = shallow(<Facebook {...mockProps} />)
    instance = component.instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('componentDidMount()', () => {
    it('should call fetchRecommendations', () => {
      instance.componentDidMount();
      expect(instance.props.fetchRecommendations).toHaveBeenCalledWith(instance.props.id);
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object', () => {
      const state = {
        recommendationReducer: {
          items: [],
        },
      }
      const expectedResult = {
        recommendations: state.recommendationReducer,
      };

      expect(mapStateToProps(state)).toEqual(expectedResult);
    })
  })
})
