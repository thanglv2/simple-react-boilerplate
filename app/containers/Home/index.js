// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import { searchMovie } from '../Search/actions'
import { filterFilm } from '../Filter/action'
import { fetchMovies } from './actions';
import LoadingFilm from '../../components/LoadingFilm';
import MovieList from '../../components/MovieList';
import SearchFilm from '../Search'
import Pagination from '../Pagination'
import Sort from '../SortBy'
import Filter from '../Filter'
import { sortOptions, filterByCountryOptions, filterByYear, countryObject } from '../../../utils/dataOptions'

type Props = {
  fetchMovies: () => void,
  movies: Object,
  match: Object,
  searchMovie: () => void,
  filterFilm: () => void,
}

class Home extends React.Component<Props> {
  state = {
    pageOfItems: [],
  }

  componentDidMount() {
    if (!this.props.match.params.searchText) {
      this.props.fetchMovies();
    } else {
      this.props.searchMovie(this.props.match.params.searchText)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.searchText !== this.props.match.params.searchText) {
      this.props.searchMovie(this.props.match.params.searchText)
    }
  }

  onChangePage = (pageOfItems) => {
    this.setState({ pageOfItems });
  }

  onCountryChange = (value) => {
    this.props.filterFilm(countryObject[value]);
  }

  onYearChange = (value) => {
    this.props.filterFilm(parseInt(value, 10))
  }


  render() {
    const { items } = this.props.movies;
    const { pageOfItems } = this.state;

    return (
      <div>
        <Filter options={filterByCountryOptions} onChange={this.onCountryChange} />
        <Filter options={filterByYear} onChange={this.onYearChange} />
        <Sort sortOptions={sortOptions} />
        <SearchFilm searchText="" />
        { items.length === 0 && <LoadingFilm /> }
        { items.length > 0 && <MovieList movies={pageOfItems} /> }
        <Pagination items={items} onChangePage={this.onChangePage} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movieList,
})

export default connect(mapStateToProps, { fetchMovies, searchMovie, filterFilm })(Home)
