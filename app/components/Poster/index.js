// @flow

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { StyledImage, StyledGrid } from '../../../utils/commonStyle'
import { URL_IMG, IMG_SIZE_LARGE } from '../../../utils/constants';


const Poster = ({ movie }: Object) => {
  const { overview } = movie.item;

  return (
    <StyledGrid>
      <Row>
        <Col xs={12} sm={6} md={4}>
          <StyledImage src={URL_IMG + IMG_SIZE_LARGE + movie.item.poster_path} responsive />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <h1>{movie.item.original_title}</h1>
          <h1>Overview: </h1>
          <p>{overview.length > 300 ? `${overview.substring(0, 250)}...` : overview}</p>
          <h1>Release_date</h1>
          <p>{movie.item.release_date}</p>
        </Col>
      </Row>
    </StyledGrid>
  )
};

export default Poster
