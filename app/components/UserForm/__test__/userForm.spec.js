import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { UserForm, mapStateToProps } from '../index';
import { NotificationManager } from 'react-notifications';

Enzyme.configure({ adapter: new Adapter() });

describe('<UserForm />', () => {
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

    component = shallow(<UserForm {...mockProps} />)
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
      const spy = jest.spyOn(instance, 'createNotification')
      const name = 'hoang tuan anh';
      const email = 'hoangtuananhnamdinh@gmail.com';
      let picture;
      let userId;
      instance.setState({
        name, email, picture, userId,
      })
      instance.handleSubmit({ preventDefault: jest.fn() })

      expect(instance.props.updateUser).toHaveBeenCalledWith({
        name, email, picture, userId,
      });
      expect(spy).toHaveBeenCalled()
    })
    it('should not call updateUser', () => {
      instance.handleSubmit({ preventDefault: jest.fn() })
      expect(instance.props.updateUser).not.toHaveBeenCalled()
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

  describe('validate', () => {
    it('should return errors object with property name', () => {
      instance.setState({ name: 'name' })
      setTimeout(() => {
        expect(instance.validate()).toEqual({ name: 'Must be 7 characters at least' })
      }, 1000)
    })
    it('should return errors object with property email', () => {
      instance.setState({ email: 'email' })
      setTimeout(() => {
        expect(instance.validate()).toEqual({ name: 'Invalid email address' })
      }, 1000)
    })
    it('should return empty object', () => {
      instance.setState({
        name: 'hoang tuan anh',
        email: 'hoangtuananhnamdinh@gmail.com',
      })
      setTimeout(() => {
        expect(instance.validate()).toEqual({})
      }, 1000)
    })
  })

  describe('createNotification()', () => {
    it('should return success notification', () => {
      expect(instance.createNotification()).toEqual(NotificationManager.success('Update successfully', 'Edit Profile'))
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
      component.find('[type="file"]').simulate('change', {
        target: {
          files: [blob],
        },
      })
      expect(spy).toHaveBeenCalled()
    })
  })
})
