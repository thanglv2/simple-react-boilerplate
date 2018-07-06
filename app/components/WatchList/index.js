import * as React from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import { fetchMovies } from '../../containers/Home/actions';
import { URL_IMG, IMG_SIZE_LARGE } from '../../../utils/constants'
import { StyledGrid, StyledImage } from '../../../utils/commonStyle'

type Props = {
  fetchMovies: () => void,
  movies: Object,
}
class WatchList extends React.Component<Props> {
  state = {
    filmsId: [],
  }

  componentDidMount() {
    this.props.fetchMovies()
    axios.get('http://localhost:3000/films')
      .then(({ data }) => {
        if (data.length > 0) {
          const bookedMarkFilm = data.filter(item => item.bookMark === true);
          const filmsId = bookedMarkFilm.map(film => film.filmId);
          this.setState({ filmsId })
        }
      })
  }

  render() {
    const bookMarkedMovies = this.props.movies.items
      ? this.props.movies.items.filter(movie => this.state.filmsId.includes(movie.id))
      : [];

    return (
      <StyledGrid>
        <h1>WatchList</h1>
        {bookMarkedMovies.length > 0 && bookMarkedMovies.map(bookMarkedMovie =>
          (
            <Row key={bookMarkedMovie.id}>
              <Col xs={6} sm={3} md={3} key={bookMarkedMovie.id}>
                <StyledImage src={URL_IMG + IMG_SIZE_LARGE + bookMarkedMovie.poster_path} responsive />
              </Col>
              <Col xs={6} sm={9} md={4}>
                <h1>{bookMarkedMovie.original_title}</h1>
                <h1>Overview: </h1>
                <p>{bookMarkedMovie.length > 300 ? `${bookMarkedMovie.substring(0, 250)}...` : bookMarkedMovie.overview}</p>
                <h1>Release_date</h1>
                <p>{bookMarkedMovie.release_date}</p>
              </Col>
            </Row>
          ))
        }
      </StyledGrid>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movieList,
})
export default connect(mapStateToProps, { fetchMovies })(WatchList)
