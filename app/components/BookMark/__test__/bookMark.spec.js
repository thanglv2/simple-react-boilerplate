import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BookMark, { StyledBookMark } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<BookMark />', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      handleBookMark: jest.fn(),
      checkBookMark: false,
      filmId: 1234,
      ...overrides,
    }

    component = shallow(<BookMark {...mockProps} />)
    instance = component.instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('handleClick()', () => {
    it('should call handleBookMark', () => {
      instance.handleClick({ preventDefault: jest.fn() });
      expect(instance.props.handleBookMark).toHaveBeenCalledWith(instance.props.filmId)
    })
  })

  describe('render()', () => {
    it('should return a span that has attribute heartcolor with value false', () => {
      expect(component.find(StyledBookMark).prop('heartcolor')).toEqual('false')
    })

    it('should return a span that has attribute heartcolor with value true', () => {
      setUpComponent({ checkBookMark: true });
      expect(component.find(StyledBookMark).prop('heartcolor')).toEqual('true')
    })
  })
})
