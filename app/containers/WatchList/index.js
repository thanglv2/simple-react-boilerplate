import * as React from 'react';
import { connect } from 'react-redux'

import { fetchMovies } from '../../containers/Home/actions';
import { StyledGrid } from '../../../utils/commonStyle'
import Header from '../../containers/Header'
import { fetchFilms } from '../../containers/MovieList/action'
import WatchListPage from '../../components/WatchListPage'
import { EmptyList } from '../../components/EmptyList'
import BaseLoading from '../../components/BaseLoading';
import Footer from '../../components/Footer'

type Props = {
  fetchMovies: () => void,
  fetchFilms: () => void,
  movies: Object,
  films: Object,
  loading: boolean,
}

export class WatchList extends React.Component<Props> {
  state = {
    filmsId: [],
  }

  componentDidMount() {
    this.props.fetchMovies()
    this.props.fetchFilms();
  }

  componentDidUpdate() {
    const { items } = this.props.films;
    if (items.length) {
      const bookedMarkFilm = items.filter(item => item.bookMark === true)
      const filmsId = bookedMarkFilm.map(film => film.filmId);
      if (this.state.filmsId.length !== filmsId.length) {
        this.handldeFilmsId(filmsId)
      }
    }
  }

  handldeFilmsId = (filmsId = []) => {
    this.setState({ filmsId })
  }

  render() {
    const { items } = this.props.movies;
    const { loading } = this.props;
    const bookMarkedMovies = items && items.length > 0
      ? items.filter(movie => this.state.filmsId.includes(movie.id))
      : [];

    return (
      <React.Fragment>
        <Header />
        <StyledGrid>
          <h1>WatchList</h1>
          <BaseLoading loading={loading}>
            { bookMarkedMovies.length > 0 ? <WatchListPage bookMarkedMovies={bookMarkedMovies} /> : <EmptyList /> }
          </BaseLoading>
        </StyledGrid>
        <Footer />
      </React.Fragment>
    )
  }
}

export const mapStateToProps = state => ({
  movies: state.movieList,
  films: state.filmReducer,
  loading: state.filmReducer.isFetching,
})

export default connect(mapStateToProps, { fetchMovies, fetchFilms })(WatchList)
