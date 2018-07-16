import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from '../index';
import { countryObject } from '../../../../utils/dataOptions'

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

  describe('onCountryChange', () => {
    it('should call filterFilm', () => {
      instance.onCountryChange('Canada')
      expect(instance.props.filterFilm).toHaveBeenLastCalledWith(countryObject.Canada)
    })
  })

  describe('onYearChange', () => {
    it('should call filterFilm', () => {
      instance.onYearChange('1900')
      expect(instance.props.filterFilm).toHaveBeenLastCalledWith(parseInt('1900', 10))
    })
  })

  describe('setLanguage', () => {
    it('should call filterFilm', () => {
      instance.setLanguage('vi')
      expect(instance.props.localeSet).toHaveBeenLastCalledWith('vi')
    })
  })

  describe('hanleLogin', () => {
    it('should call filterFilm', () => {
      instance.hanleLogin()
      expect(instance.props.history.push).toHaveBeenLastCalledWith('/login')
    })
  })

  describe('redirectHome', () => {
    it('should redirect to home page', () => {
      instance.redirectHome()
      expect(instance.props.history.push).toHaveBeenCalledWith('/');
    })
  })

  describe('render()', () => {
    it('should render StyledNavRight', () => {
      const getItem = jest.spyOn(localStorage, 'getItem');
      getItem.mockReturnValue('test');
    })
  })
})
