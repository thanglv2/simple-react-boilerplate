// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import { searchMovie } from '../Search/actions'
import { fetchMovies } from './actions';
import LoadingFilm from '../../components/LoadingFilm';
import MovieList from '../../components/MovieList';
import SearchFilm from '../Search'

type Props = {
  fetchMovies: () => void,
  movies: Object,
  match: Object,
  searchMovie: () => void,
}
class Home extends React.Component<Props> {
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

  render() {
    const { items } = this.props.movies;

    return (
      <div>
        <SearchFilm searchText="" />
        { items.length === 0 && <LoadingFilm /> }
        { items.length > 0 && <MovieList movies={items} /> }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movieList,
})

export default connect(mapStateToProps, { fetchMovies, searchMovie })(Home)
