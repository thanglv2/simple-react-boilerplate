// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from './actions';
import LoadingFilm from '../../components/LoadingFilm';
import MovieList from '../../components/MovieList';

type Props = {
  fetchMovies: () => void,
  movies: Object
}
class Home extends Component<Props> {
  componentDidMount() {
    return this.props.fetchMovies();
  }

  render() {
    const { items } = this.props.movies;

    return (
      <div>
        { items.length === 0 && <LoadingFilm /> }
        { items.page && items.page > 0 && <MovieList movies={items.results} /> }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movieList,
});


export default connect(mapStateToProps, { fetchMovies })(Home)
