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
import { filmReducer } from './reducer'
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
  state = {
    bookMark: false,
  }

  componentDidMount() {
    this.props.fetchFilms();
  }

  updateBookMark = (filmId) => {
    const userId = localStorage.getItem('userId');
    // this.setState({ bookMark: !this.state.bookMark }, () => {
    //   // if (this.state.bookMark) {
    //   //   this.props.saveFilm({ filmId, userId, bookMark: true })
    //   // }
    //   if (!this.state.bookMark) {
    //     const { id } = this.props.films
    //     console.log(this.props.films)
    //     // this.props.updateFilm(id)
    //   }
    // })
  }

  checkBookMark = (id) => {
    if (this.props.films) {
      const { items } = this.props.films;
      const bookMarkedFilmId = Array.from(items).filter(item => item.bookMark === true).map(film => film.filmId);
      if (bookMarkedFilmId.includes(id) || this.state.bookMark) {
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
              { localStorage.getItem('userId') ?
                <BookMark checkBookMark={this.checkBookMark(movie.id)} updateBookMark={this.updateBookMark(movie.id)} filmId={movie.id} />
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

export default withReducer('filmReducer', filmReducer)(connect(mapStateToProps, { fetchFilms, saveFilm, updateFilm })(MovieList))
