// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { URL_IMG, IMG_SIZE_LARGE } from '../../../utils/constants'
import { StyledGrid, StyledImage } from '../../../utils/commonStyle'

type Props = {
  movies: Array<Object>
}

const MovieList = ({ movies }: Props) => {
  const moviesList = movies.filter(movie => movie.poster_path !== null)
    .map(movie => (
      <Col xs={6} sm={4} md={3} key={movie.id} >
        <Link to={`/movie/${movie.id}`} >
          <StyledImage src={URL_IMG + IMG_SIZE_LARGE + movie.poster_path} responsive />
        </Link>
      </Col>));

  return (
    <StyledGrid fluid={false}>
      <Row>
        {moviesList}
      </Row>
    </StyledGrid>
  );
}

export default MovieList
