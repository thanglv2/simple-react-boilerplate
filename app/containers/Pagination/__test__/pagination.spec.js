import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PaginationPage from '../index';
import { IntlProvider } from 'react-intl'

Enzyme.configure({ adapter: new Adapter() });

describe('<PaginationPage />', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      items: [{ id: 123 }],
      initialPage: 1,
      onChangePage: jest.fn(),
      ...overrides,
    }

    component = shallow(<PaginationPage {...mockProps} />)
    instance = component.instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('componentDidUpdate', () => {
    it('should call setPage', () => {
      const spy = jest.spyOn(instance, 'setPage')
      instance.componentDidUpdate({ items: [] })
      expect(spy).toHaveBeenCalledWith(instance.props.initialPage)
    })
  })
  describe('setPage', () => {
    it('should return', () => {
      instance.setState({ pager: { totalPages: 5 } })
      instance.setPage(6);
      expect(instance.setPage()).toEqual(undefined)
    })
  })

  describe('getPager()', () => {
    it('should return right object', () => {
      expect(instance.getPager(100, 5)).toEqual({
        currentPage: 5, endIndex: 39, endPage: 7, pageSize: 8, pages: [2, 3, 4, 5, 6, 7], startIndex: 32, startPage: 2, totalItems: 100, totalPages: 13,
      })
    })

    it('should return right object', () => {
      expect(instance.getPager(100, 3)).toEqual({
        currentPage: 3, endIndex: 23, endPage: 8, pageSize: 8, pages: [1, 2, 3, 4, 5, 6, 7, 8], startIndex: 16, startPage: 1, totalItems: 100, totalPages: 13,
      })
    })

    it('should return right object', () => {
      expect(instance.getPager(100, 15)).toEqual({
        currentPage: 15, endIndex: 99, endPage: 13, pageSize: 8, pages: [8, 9, 10, 11, 12, 13], startIndex: 112, startPage: 8, totalItems: 100, totalPages: 13,
      })
    })
  })

  describe('handleFirstPage', () => {
    it('should call setPage', () => {
      const spy = jest.spyOn(instance, 'setPage')
      instance.handleFirstPage();
      expect(spy).toHaveBeenCalledWith(1)
    })
  })

  describe('handlePreviousPage', () => {
    it('should call setPage', () => {
      const spy = jest.spyOn(instance, 'setPage')
      instance.setState({ pager: { currentPage: 2 } })
      instance.handlePreviousPage()
      expect(spy).toHaveBeenCalledWith(1)
    })
  })

  describe('handleNextPage', () => {
    it('should call setPage', () => {
      const spy = jest.spyOn(instance, 'setPage')
      instance.setState({ pager: { currentPage: 2 } })
      instance.handleNextPage()
      expect(spy).toHaveBeenCalledWith(3)
    })
  })

  describe('handleLastPage', () => {
    it('should call setPage', () => {
      const spy = jest.spyOn(instance, 'setPage')
      instance.handleLastPage()
      expect(spy).toHaveBeenCalledWith(1)
    })
  })

  describe('render()', () => {
    it('should', () => {
      const spy = jest.spyOn(instance, 'setPage')
      const wrapper = mount(<IntlProvider><PaginationPage {...mockProps} /></IntlProvider>)
      wrapper.find('div ul li a').at(2).simulate('click')
      setTimeout(() => {
        expect(spy).toHaveBeenCalled()
      }, 100)
    })
  })
})
