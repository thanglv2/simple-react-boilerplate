import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ViewProfile, mapStateToProps } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<ViewProfile />', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      userInfo: {
        name: '',
        email: '',
        picture: '',
      },
      fetchUser: jest.fn(),
      saveUser: jest.fn(),
      getUserReducer: { items: [] },
      ...overrides,
    }

    component = shallow(<ViewProfile {...mockProps} />)
    instance = component.instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('componentDidMount()', () => {
    it('should call fetchUser', () => {
      instance.componentDidMount();
      expect(instance.props.fetchUser).toHaveBeenCalled();
    })
  })

  describe('componentDidUpdate', () => {
    it('should call userDbReducer', () => {
      setUpComponent({ getUserReducer: { items: [{ name: 'name', email: 'email', picture: 'picture' }] } })
      instance.componentDidUpdate();
      expect(instance.props.userDbReducer).toHaveBeenCalledWith({ name: 'name', email: 'email', picture: 'picture' })
    })
    it('should not call userDbReducer', () => {
      const payload = {
        name: 'name',
        email: 'email',
        picture: 'picture',
      };
      setUpComponent({
        userInfo: payload,
      });
      expect(instance.props.userDbReducer).not.toHaveBeenCalledWith(payload);
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object', () => {
      const state = {
        userReducer: {
          payload: {},
        },
        getUserReducer: {},
      }
      const expectedResult = {
        userInfo: state.userReducer.payload,
        getUserReducer: state.getUserReducer,
      };

      expect(mapStateToProps(state)).toEqual(expectedResult);
    })
  })
})
