import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { WatchList, mapStateToProps } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<WatchList />', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      fetchMovies: jest.fn(),
      fetchFilms: jest.fn(),
      movies: {
        items: [
          {
            id: 123, poster_path: 'http', original_title: 'original_title', overview: 'overview',
          },
        ],
      },
      films: { items: [{ bookMark: true, filmId: 123 }] },
      ...overrides,
    }

    component = shallow(<WatchList {...mockProps} />)
    instance = component.instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('mapStateToProps', () => {
    it('should return an object', () => {
      const state = {
        movieList: {},
        filmReducer: {},
      }
      const expectedResult = {
        movies: state.movieList,
        films: state.filmReducer,
      };

      expect(mapStateToProps(state)).toEqual(expectedResult);
    })
  })

  describe('handldeFilmsId()', () => {
    it('should call setState()', () => {
      const spy = jest.spyOn(instance, 'setState');
      let filmsId;
      instance.handldeFilmsId(filmsId);
      setTimeout(() => {
        expect(spy).toHaveBeenCalledWith(filmsId)
      }, 100)
    })
  })

  describe('componentDidUpdate', () => {
    it('should call handldeFilmsId()', () => {
      const spy = jest.spyOn(instance, 'handldeFilmsId')
      instance.componentDidUpdate();
      expect(spy).toHaveBeenCalledWith([123])
    })

    it('should not call handldeFilmsId() with no item', () => {
      const spy = jest.spyOn(instance, 'handldeFilmsId')
      setUpComponent({ films: { items: [] } })
      instance.componentDidUpdate();
      expect(spy).not.toHaveBeenCalled()
    })

    it('should not call handldeFilmsId() with the same item', () => {
      const spy = jest.spyOn(instance, 'handldeFilmsId')
      instance.setState({ filmsId: [123] })
      instance.componentDidUpdate();
      expect(spy).not.toHaveBeenCalled()
    })
  })

  describe('render()', () => {
    it('should has no watchList', () => {
      setUpComponent({ movies: { items: [] } })
    })
  })
})
