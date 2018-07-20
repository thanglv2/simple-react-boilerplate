import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Trailers, mapStateToProps } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Trailers />', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      id: 1,
      trailers: {
        items: [],
      },
      fetchTrailers: jest.fn(),
      ...overrides,
    }

    component = shallow(<Trailers {...mockProps} />)
    instance = component.instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('getDerivedStateFromProps', () => {
    it('should call fetchTrailers', () => {
      instance.setState({ id: 2 })
      expect(instance.props.fetchTrailers).toHaveBeenCalledWith(1)
    })
  })

  describe('render()', () => {
    it('should render <TrailerList />', () => {
      setUpComponent({ trailers: { items: ['a', 'b'] } })
      const wrapper = mount(<Trailers {...mockProps} />)
      expect(wrapper.find('div h3').text()).toEqual('Trailers');
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object', () => {
      const state = {
        trailerReducer: {
          items: [],
        },
      }
      const expectedResult = {
        trailers: state.trailerReducer,
      };

      expect(mapStateToProps(state)).toEqual(expectedResult);
    })
  })
})
