import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import { ViewProfile, mapStateToProps } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<ViewProfile />', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      userInfo: { user: {} },
      editUserReducer: { user: {} },
      fetchReducer: { user: {} },
      fetchUser: jest.fn(),
      ...overrides,
    }

    component = shallow(<MemoryRouter><ViewProfile {...mockProps} /></MemoryRouter>)
    instance = component.dive().dive().instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('componentDidMount()', () => {
    it('should call fetchUser', () => {
      instance.componentDidMount();
      expect(instance.props.fetchUser).toHaveBeenCalled();
    })

    it('should not call fetchUser', () => {
      setUpComponent({ userInfo: { user: { name: 'name', email: 'email' } } })
      instance.componentDidMount();
      expect(instance.props.fetchUser).not.toHaveBeenCalled();
    })
  })

  describe('render', () => {
    it('should return a tag with textValue is firstName', () => {
      setUpComponent({ userInfo: { user: {} }, editUserReducer: { user: { name: 'Hoang Tuan Anh' } } });
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object', () => {
      const state = {
        userDbReducer: {},
        fetchReducer: {},
      }
      const expectedResult = {
        userInfo: state.userDbReducer,
        fetchReducer: state.fetchReducer,
      };

      expect(mapStateToProps(state)).toEqual(expectedResult);
    })
  })
})
