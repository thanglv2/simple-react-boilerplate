import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Recommendations, mapStateToProps } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Recommendations />', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      id: 1,
      recommendations: {
        items: [],
      },
      fetchRecommendations: jest.fn(),
      loading: false,
      ...overrides,
    }

    component = shallow(<Recommendations {...mockProps} />)
    instance = component.instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('getDerivedStateFromProps', () => {
    it('should call fetchRecommendations', () => {
      instance.setState({ id: 2 })
      expect(instance.props.fetchRecommendations).toHaveBeenCalledWith(1)
    })
  })

  describe('render()', () => {
    it('should render <TrailerList />', () => {
      setUpComponent({ recommendations: { items: ['a', 'b'] } })
      const wrapper = mount(<Recommendations {...mockProps} />)
      expect(wrapper.find('div h3').text()).toEqual('RecommendationList');
    })
  })

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
