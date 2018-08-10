import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Home, mapStateToProps } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      fetchMovies: jest.fn(),
      searchMovie: jest.fn(),
      filterFilm: jest.fn(),
      movies: { items: [] },
      match: { params: { searchText: 'test' } },
      location: { pathname: '/' },
      ...overrides,
    }

    component = shallow(<Home {...mockProps} />)
    instance = component.instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('mapStateToProps', () => {
    it('should return an object', () => {
      const state = {
        movieList: { items: [] },
      }
      const expectedResult = {
        movies: state.movieList,
      };

      expect(mapStateToProps(state)).toEqual(expectedResult);
    })
  })

  describe('componentDidMount', () => {
    it('should call fetchMovies', () => {
      setUpComponent({ match: { params: { searchText: '' } } })
      instance.componentDidMount();
      expect(instance.props.fetchMovies).toHaveBeenCalled()
    })
  })

  describe('componentDidUpdate', () => {
    it('should call fetchMovies', () => {
      instance.componentDidUpdate({ match: { params: { searchText: 'test' } }, location: { pathname: '/k' } })
      expect(instance.props.fetchMovies).toHaveBeenCalled();
    })
    it('should call searchMovie', () => {
      instance.componentDidUpdate({ match: { params: { searchText: 'hi' } }, location: { pathname: '/k' } })
      expect(instance.props.searchMovie).toHaveBeenCalledWith(instance.props.match.params.searchText)
    })
    it('should not call fetchMovies', () => {
      instance.componentDidUpdate({ match: { params: { searchText: 'test' } }, location: { pathname: '/' } })
      expect(instance.props.fetchMovies).not.toHaveBeenCalled();
    })
  })

  describe('render()', () => {
    it('should render <MovieList />', () => {
      setUpComponent({ movies: { items: ['a', 'b'] } });
    })
  })

  describe('onChangePage', () => {
    it('should call setState', () => {
      const spy = jest.spyOn(instance, 'setState')
      let pageOfItems;
      instance.onChangePage(pageOfItems)
      expect(spy).toHaveBeenCalled();
    })
  })

  describe('onCountryChange', () => {
    it('should call filterFilm', () => {
      instance.onCountryChange('Germany');
      expect(instance.props.filterFilm).toHaveBeenCalledWith('DE')
    })
  })

  describe('onYearChange', () => {
    it('should call filterFilm', () => {
      instance.onYearChange('1902');
      expect(instance.props.filterFilm).toHaveBeenCalledWith(1902)
    })
  })
})
