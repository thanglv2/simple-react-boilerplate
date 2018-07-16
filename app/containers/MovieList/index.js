// @flow

import * as React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { URL_IMG, IMG_SIZE_LARGE } from '../../../utils/constants'
import { StyledImage } from '../../../utils/commonStyle'
import BookMark from '../../components/BookMark';
import { fetchFilms, saveFilm, updateFilm } from './action'

type Props = {
  movies: Array<Object>,
  films: Object,
  fetchFilms: () => void,
  saveFilm: () => void,
  updateFilm: () => void,
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

  updateBookMark = (filmId) => {
    const { items } = this.props.films
    const film = Array.from(items).filter(item => item.filmId === filmId)[0]
    const { id } = film;
    const data = film.bookMark ? { bookMark: false } : { bookMark: true }
    this.props.updateFilm(id, data);
  }

  saveBookMark = (filmId) => {
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
    const moviesList = this.props.movies.filter(movie => movie.poster_path !== null)
      .map(movie => (
        <Col xs={6} sm={4} md={3} key={movie.id} >
          <Link to={`/movie/${movie.id}`} >
            <Wrraper>
              <StyledImage src={URL_IMG + IMG_SIZE_LARGE + movie.poster_path} responsive />
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
      <Row>
        {moviesList}
      </Row>
    );
  }
}

export const mapStateToProps = state => ({
  films: state.filmReducer,
})

export default connect(mapStateToProps, { fetchFilms, saveFilm, updateFilm })(MovieList)
