// @flow

import * as React from 'react';
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { URL_IMG, IMG_SIZE_LARGE } from '../../../utils/constants'
import { StyledImage, StyledRow } from '../../../utils/commonStyle'
import BookMark from '../../components/BookMark';
import { fetchFilms, saveFilm, updateFilm } from './action'
import BaseLoading from '../../components/BaseLoading'

type Props = {
  movies: Array<Object>,
  films: Object,
  fetchFilms: () => void,
  saveFilm: () => void,
  updateFilm: () => void,
  loading: boolean,
}

const Wrraper = styled.div`
  &:hover {
    .meta {
      visibility: visible
    }
  }
`

export class MovieList extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchFilms();
  }

  updateBookMark(filmId) {
    const { items } = this.props.films
    const film = Array.from(items).filter(item => item.filmId === filmId)[0]
    const { id } = film;
    const data = film.bookMark ? { bookMark: false } : { bookMark: true }
    this.props.updateFilm(id, data);
  }

  saveBookMark(filmId) {
    const userId = localStorage.getItem('userId');
    const data = {
      filmId,
      userId,
      bookMark: true,
    }

    this.props.saveFilm(data)
  }

  isBookMark = (id) => {
    const { items } = this.props.films;
    const bookMarkedFilmId = Array.from(items).filter(item => item.bookMark === true).map(film => film.filmId);
    if (bookMarkedFilmId.includes(id)) {
      return true;
    }
    return false
  }

  handleBookMark = (id) => {
    const { items } = this.props.films;
    const bookMarkedFilmId = Array.from(items).map(item => item.filmId);
    if (bookMarkedFilmId.includes(id)) {
      return true;
    }
    return false
  }

  render() {
    const { movies, loading } = this.props;
    const moviesList = movies.filter(movie => movie.poster_path !== null)
      .map(movie => (
        <Col xs={6} sm={4} md={3} key={movie.id} >
          <Link to={`/movie/${movie.id}`} >
            <Wrraper>
              <StyledImage src={URL_IMG + IMG_SIZE_LARGE + movie.poster_path} className="img-fluid" />
              {localStorage.getItem('userId') ?
                <BookMark
                  checkBookMark={this.isBookMark(movie.id)}
                  handleBookMark={this.handleBookMark(movie.id)
                    ? () => this.updateBookMark(movie.id)
                    : () => this.saveBookMark(movie.id)}
                  filmId={movie.id}
                />
                : null
              }
            </Wrraper>
          </Link>
        </Col>));
    return (
      <BaseLoading loading={loading} >
        <StyledRow>
          {moviesList}
        </StyledRow>
      </BaseLoading>
    );
  }
}

export const mapStateToProps = state => ({
  films: state.filmReducer,
  loading: state.movieList.isFetching,
})

export default connect(mapStateToProps, {
  fetchFilms, saveFilm, updateFilm,
})(MovieList)
