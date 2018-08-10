import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router'
import { NavBarCom, mapStateToProps } from '../index'

Enzyme.configure({ adapter: new Adapter() });

describe('<NavBarCom />', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      fetchUser: jest.fn(),
      userInfo: {
        user: {
          name: '',
          email: '',
        },
      },
      editUserReducer: {
        user: {
          name: '',
          email: '',
        },
      },
      fetchReducer: {
        user: {
          name: '',
          email: '',
        },
      },
      history: {
        push: jest.fn(),
      },
      ...overrides,
    }
    component = shallow(<NavBarCom {...mockProps} />)
    instance = component.instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('toggle', () => {
    it('should call setState', () => {
      const spy = jest.spyOn(instance, 'setState')
      instance.toggle();
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
    it('should render a tag with textvalue is firtName', () => {
      setUpComponent({ editUserReducer: { user: {} }, userInfo: { user: { name: 'Hoang Tuan Anh' } } })
      const wrapper = mount(<MemoryRouter><NavBarCom {...mockProps} /></MemoryRouter>)
      expect(wrapper.find('div p').text()).toEqual('Anh')
    })
    it('should return a tag with textValue is firstName', () => {
      setUpComponent({ userInfo: { user: {} }, editUserReducer: { user: { name: 'Hoang Tuan Anh' } } });
      const wrapper = mount(<MemoryRouter><NavBarCom {...mockProps} /></MemoryRouter>)
      expect(wrapper.find('div p').text()).toEqual('Anh')
    })

    it('should return a tag with textValue is firstName', () => {
      setUpComponent({ userInfo: { user: {} }, editUserReducer: { user: {} }, fetchReducer: { user: { name: 'Hoang Tuan Anh' } } });
      const wrapper = mount(<MemoryRouter><NavBarCom {...mockProps} /></MemoryRouter>)
      expect(wrapper.find('div p').text()).toEqual('Anh')
    })
  })
})

describe('mapStateToProps', () => {
  it('should return Object', () => {
    const state = {
      fetchReducer: {
        user: {},
      },
      userDbReducer: {
        user: {},
      },
      editUserReducer: {
        user: {},
      },
    };

    const expectResult = {
      userInfo: state.userDbReducer,
      editUserReducer: state.editUserReducer,
      fetchReducer: state.fetchReducer,
    }
    expect(mapStateToProps(state)).toEqual(expectResult)
  })
})

