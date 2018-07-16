import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router'
import { NavBar } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<NavBar />', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      handleClick: jest.fn(),
      logout: jest.fn(),
      history: {
        push: jest.fn(),
      },
      ...overrides,
    }

    component = shallow(<NavBar {...mockProps} />)
    instance = component.instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('handleClick', () => {
    it('should call setState', () => {
      const spy = jest.spyOn(instance, 'setState')
      instance.handleClick();
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })

  describe('logout', () => {
    it('should call history', () => {
      instance.logout();
      expect(instance.props.history.push).toBeCalledWith('/')
    })
  })

  describe('render', () => {
    it('should return StyledNav with property display true', () => {
      const wrapper = mount(<MemoryRouter><NavBar {...mockProps} /></MemoryRouter>)
      instance.setState({ display: true })
      wrapper.update()
      setTimeout(() => {
        expect(instance.state.display).toEqual(true);
      })
    })
  })
})

