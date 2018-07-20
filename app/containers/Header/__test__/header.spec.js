import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from '../index';
import NavBar from '../../../components/NavBar'

Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      filterFilm: jest.fn(),
      localeSet: jest.fn(),
      history: {
        push: jest.fn(),
      },
      ...overrides,
    }

    component = shallow(<Header {...mockProps} />)
    instance = component.instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('setLanguage', () => {
    it('should call filterFilm', () => {
      instance.setLanguage('vi')
      expect(instance.props.localeSet).toHaveBeenLastCalledWith('vi')
    })
  })

  describe('render()', () => {
    it('should render StyledNavRight', () => {
      const getItem = jest.spyOn(localStorage, 'getItem');
      getItem.mockReturnValue('test');
    })
  })
})
