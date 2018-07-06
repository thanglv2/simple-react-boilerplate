// @flow

import * as React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { URL_IMG, IMG_SIZE_LARGE } from '../../../utils/constants'
import { StyledImage } from '../../../utils/commonStyle'
import styled from 'styled-components'
import BookMark from '../BookMark';

type Props = {
  movies: Array<Object>
}
const Wrraper = styled.div`
  &:hover {
    .meta {
      visibility: visible
    }
  }
`
const MovieList = ({ movies }: Props) => {
  const moviesList = movies.filter(movie => movie.poster_path !== null)
    .map(movie => (
      <Col xs={6} sm={4} md={3} key={movie.id} >
        <Link to={`/movie/${movie.id}`} >
          <Wrraper>
            <StyledImage src={URL_IMG + IMG_SIZE_LARGE + movie.poster_path} responsive />
            { localStorage.getItem('userId') ?
              <BookMark filmId={movie.id} />
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

export default MovieList
