// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import { searchMovie } from '../Search/actions'
import { fetchMovies } from './actions';
import LoadingFilm from '../../components/LoadingFilm';
import MovieList from '../../components/MovieList';
import Pagination from '../Pagination'
import { StyledGrid } from '../../../utils/commonStyle'
import Header from '../Header'


type Props = {
  fetchMovies: () => void,
  searchMovie: () => void,
  movies: Object,
  match: Object,
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

  render() {
    const { items } = this.props.movies;
    const { pageOfItems } = this.state;

    return (
      <StyledGrid>
        <Header />
        { items.length === 0 && <LoadingFilm /> }
        { items.length > 0 && <MovieList movies={pageOfItems} /> }
        <Pagination items={items} onChangePage={this.onChangePage} />
      </StyledGrid>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movieList,
})

export default connect(mapStateToProps, {
  fetchMovies, searchMovie,
})(Home)
