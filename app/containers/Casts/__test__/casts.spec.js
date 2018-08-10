import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Casts, mapStateToProps } from '../index';
import CastsList from '../../../components/CastsList'

Enzyme.configure({ adapter: new Adapter() });

describe('<Casts />', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      id: 1,
      casts: {
        items: [],
      },
      fetchCasts: jest.fn(),
      ...overrides,
    }

    component = shallow(<Casts {...mockProps} />)
    instance = component.instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('getDerivedStateFromProps', () => {
    it('should call fetchCasts', () => {
      instance.setState({ id: 2 })
      expect(instance.props.fetchCasts).toHaveBeenCalledWith(1)
    })
  })

  describe('render()', () => {
    it('should render <CastsList />', () => {
      setUpComponent({ casts: { items: ['a', 'b'] } })
      const wrapper = mount(<Casts {...mockProps} />)
      expect(wrapper.find('div h3').text()).toEqual('Casts');
    })
  })

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
