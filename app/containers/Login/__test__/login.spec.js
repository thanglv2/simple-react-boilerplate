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
      history: {
        push: jest.fn(),
      },
      saveUserDb: jest.fn(),
      ...overrides,
    }

    component = shallow(<Facebook {...mockProps} />)
    instance = component.instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('responseFacebook', () => {
    it('should call setState', () => {
      let name;
      let email;
      let userId;
      const picture = {
        data: {
          url: 'http',
        },
      }
      const response = {
        name,
        email,
        picture,
        userId,
      };
      instance.responseFacebook(response);
      component.update();
      expect(instance.state.isLoggedIn).toEqual(true)
    })
  })
})
