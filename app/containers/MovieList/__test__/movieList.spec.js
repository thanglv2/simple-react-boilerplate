import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MovieList, mapStateToProps } from '../index';
import { MemoryRouter } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

describe('<MovieList />', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      movies: [
        {
          id: 1,
          poster_path: 'abc',
        },
      ],
      films: {
        items: [{
          filmId: 1,
          bookMark: true,
          id: 1,
        },
        ],
      },
      fetchFilms: jest.fn(),
      saveFilm: jest.fn(),
      updateFilm: jest.fn(),
      ...overrides,
    }

    component = shallow(<MovieList {...mockProps} />)
    instance = component.instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('componentDidMount()', () => {
    it('should call fetchFilms', () => {
      instance.componentDidMount();
      expect(instance.props.fetchFilms).toHaveBeenCalled();
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object', () => {
      const state = {
        filmReducer: {},
      }
      const expectedResult = {
        films: state.filmReducer,
      };

      expect(mapStateToProps(state)).toEqual(expectedResult);
    })
  })

  describe('render()', () => {
    it('should render <BookMark /> WITH call updateBookMark', () => {
      const spy = jest.spyOn(instance, 'updateBookMark')
      const getItem = jest.spyOn(localStorage, 'getItem')
      getItem.mockReturnValue('test');
      const wrapper = mount(<MemoryRouter><MovieList {...mockProps} /></MemoryRouter>)
      wrapper.find('div span').simulate('click')

      setTimeout(() => {
        expect(spy).toHaveBeenCalledWith(1)
      }, 100)
      expect(wrapper.find('div span').prop('heartcolor')).toEqual('true')
    })

    it('should render <BookMark /> WITH call saveBookMark', () => {
      const spy = jest.spyOn(instance, 'saveBookMark')
      const getItem = jest.spyOn(localStorage, 'getItem')
      getItem.mockReturnValue('test');
      setUpComponent({
        movies: [
          {
            id: 2,
            poster_path: 'abc',
          },
        ],
      })
      const wrapper = mount(<MemoryRouter><MovieList {...mockProps} /></MemoryRouter>)
      wrapper.find('div span').simulate('click')
      setTimeout(() => {
        expect(spy).toHaveBeenCalledWith(1)
      }, 100)
      expect(wrapper.find('div span').prop('heartcolor')).toEqual('false')
    })
  })

  describe('handleBookMark', () => {
    it('should return true', () => {
      expect(instance.handleBookMark(1)).toEqual(true)
    })
    it('should return false', () => {
      expect(instance.handleBookMark(2)).toEqual(false)
    })
  })

  describe('isBookMark', () => {
    it('should return true', () => {
      expect(instance.isBookMark(1)).toEqual(true)
    })
    it('should return false', () => {
      expect(instance.isBookMark(2)).toEqual(false)
    })
  })

  describe('saveBookMark', () => {
    it('should call saveFilm prop', () => {
      instance.saveBookMark(1)
      const getItem = jest.spyOn(localStorage, 'getItem')
      getItem.mockReturnValue('test');
      const data = {
        filmId: 1,
        userId: 'test',
        bookMark: true,
      }
      expect(instance.props.saveFilm).toHaveBeenCalledWith(data)
    })
  })

  describe('updateBookMark', () => {
    it('should call updateFilm with data {bookMark: false}', () => {
      instance.updateBookMark(1);
      expect(instance.props.updateFilm).toHaveBeenCalledWith(1, { bookMark: false })
    })
    it('should call updateFilm with data {bookMark: true}', () => {
      setUpComponent({
        films: {
          items: [{
            filmId: 1,
            bookMark: false,
            id: 1,
          },
          ],
        },
      })
      instance.updateBookMark(1);
      expect(instance.props.updateFilm).toHaveBeenCalledWith(1, { bookMark: true })
    })
  })
})
