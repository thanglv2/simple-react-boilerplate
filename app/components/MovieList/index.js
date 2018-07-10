// @flow

import * as React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { URL_IMG, IMG_SIZE_LARGE } from '../../../utils/constants'
import { StyledImage } from '../../../utils/commonStyle'
import BookMark from '../BookMark';
import withReducer from '../../../utils/withReducer'
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


class MovieList extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchFilms();
  }

  updateBookMark = (filmId) => {
    const data = {
      bookMark: false
    }
    const { items } = this.props.films
    const { id } = Array.from(items).filter(item => item.filmId === filmId)[0]
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

  checkBookMark = (id) => {
    const { items } = this.props.films;
    if (items) {
      const bookMarkedFilmId = Array.from(items).filter(item => item.bookMark === true).map(film => film.filmId);
      if (bookMarkedFilmId.includes(id)) {
        return true;
      }
      return false
    }
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
                  checkBookMark={() => this.checkBookMark(movie.id)}
                  handleBookMark={this.checkBookMark(movie.id) ? () => this.updateBookMark(movie.id) :
                    () => this.saveBookMark(movie.id)}
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

const mapStateToProps = state => ({
  films: state.filmReducer,
})

export default connect(mapStateToProps, { fetchFilms, saveFilm, updateFilm })(MovieList)
