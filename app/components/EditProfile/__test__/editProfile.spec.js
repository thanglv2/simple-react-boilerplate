import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { EditProfile, mapStateToProps } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<EditProfile />', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      fetchUser: jest.fn(),
      updateUser: jest.fn(),
      fetchReducer: {
        user: {
          name: 'name',
          email: 'email',
          picture: 'picture',
        },
      },
      ...overrides,
    }

    component = shallow(<EditProfile {...mockProps} />)
    instance = component.instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('mapStateToProps', () => {
    it('should return an object', () => {
      const state = {
        fetchReducer: {},
      }
      const expectedResult = {
        fetchReducer: state.fetchReducer,
      };

      expect(mapStateToProps(state)).toEqual(expectedResult);
    })
  })

  describe('handleSubmit', () => {
    it('should call updateUser', () => {
      instance.handleSubmit({ preventDefault: jest.fn() })
      let name;
      let email;
      let picture;
      let userId;
      instance.setState({
        name, email, picture, userId,
      })
      setTimeout(() => {
        expect(instance.props.updateUser).toHaveBeenCalledWith({
          name, email, picture, userId,
        })
      }, 10)
    })
  })

  describe('handleChange()', () => {
    it('should call setState()', () => {
      const spy = jest.spyOn(instance, 'setState')
      instance.handleChange({ target: { name: 'name', value: 'value' } })
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })

  describe('setPriviousValue()', () => {
    it('should call setState()', () => {
      const spy = jest.spyOn(instance, 'setState')
      let name;
      let email;
      let picture;
      instance.setPriviousValue(name, email, picture)
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })

  describe('componentDidUpdate', () => {
    it('should call setPriviousValue', () => {
      const spy = jest.spyOn(instance, 'setPriviousValue');
      instance.componentDidUpdate({
        fetchReducer: {
          user: {
            name: '',
            email: '',
            picture: '',
          },
        },
      })

      expect(spy).toHaveBeenCalledWith('name', 'email', 'picture')
    })

    it('should not call setPriviousValue', () => {
      const spy = jest.spyOn(instance, 'setPriviousValue');
      instance.componentDidUpdate({
        fetchReducer: {
          user: {
            name: 'name',
            email: 'email',
            picture: 'picture',
          },
        },
      })

      expect(spy).not.toHaveBeenCalled()
    })
  })

  describe('fileSelectedHandler', () => {
    it('should call setState()', () => {
      const spy = jest.spyOn(instance, 'setState');
      const fileContents = 'file contents';
      const blob = new Blob([fileContents], { type: 'text/plain' });
      const readAsDataURL = jest.fn();
      const addEventListener = jest.fn((_, evtHandler) => { evtHandler(); });
      const dummyFileReader = { addEventListener, readAsDataURL, result: fileContents };
      window.FileReader = jest.fn(() => dummyFileReader);
      component.find('input').at(2).simulate('change', {
        target: {
          files: [blob],
        },
      })
      expect(spy).toHaveBeenCalled()
    })
  })
})
