import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PaginationPage from '../index';

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
        currentPage: 5,
        endIndex: 29,
        endPage: 7,
        pageSize: 6,
        pages: [2, 3, 4, 5, 6, 7],
        startIndex: 24,
        startPage: 2,
        totalItems: 100,
        totalPages: 17,
      })
    })

    it('should return right object', () => {
      expect(instance.getPager(100, 3)).toEqual({
        currentPage: 3,
        endIndex: 17,
        endPage: 6,
        pageSize: 6,
        pages: [1, 2, 3, 4, 5, 6],
        startIndex: 12,
        startPage: 1,
        totalItems: 100,
        totalPages: 17,
      })
    })

    it('should return right object', () => {
      expect(instance.getPager(100, 15)).toEqual({
        currentPage: 15,
        endIndex: 89,
        endPage: 17,
        pageSize: 6,
        pages: [12, 13, 14, 15, 16, 17],
        startIndex: 84,
        startPage: 12,
        totalItems: 100,
        totalPages: 17,
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
      const wrapper = mount(<PaginationPage {...mockProps} />)
      wrapper.find('div ul li a').at(2).simulate('click')
      setTimeout(() => {
        expect(spy).toHaveBeenCalled()
      }, 100)
    })
  })
})
