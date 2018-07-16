// @flow

import * as React from 'react';
import { Row, Col } from 'react-bootstrap'
import { URL_IMG, IMG_SIZE_LARGE } from '../../../utils/constants'
import { StyledImage } from '../../../utils/commonStyle'
import styled from 'styled-components'

const StyledTextH1 = styled.h1`
  @media (max-width: 575.98px) {
    font-size:1.2rem;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    font-size:2rem;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size:2.5rem;
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    font-size:3rem;
  }
`

const StyledTextP = styled.p`
  @media (max-width: 575.98px) {
    font-size:1.5rem;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    font-size:2rem;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size:2.5rem;
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    font-size:3rem;
  }
`
const WatchListPage = ({ bookMarkedMovies }: Array) =>
  (
    bookMarkedMovies.map(bookMarkedMovie =>
      (
        <Row key={bookMarkedMovie.id}>
          <Col xs={6} sm={3} md={3} key={bookMarkedMovie.id}>
            <StyledImage src={URL_IMG + IMG_SIZE_LARGE + bookMarkedMovie.poster_path} responsive />
          </Col>
          <Col xs={6} sm={9} md={4}>
            <StyledTextH1>{bookMarkedMovie.original_title}</StyledTextH1>
            <StyledTextH1>Overview: </StyledTextH1>
            <StyledTextP>{bookMarkedMovie.length > 300 ? `${bookMarkedMovie.substring(0, 250)}...` : bookMarkedMovie.overview}</StyledTextP>
            <StyledTextH1>Release_date</StyledTextH1>
            <StyledTextP>{bookMarkedMovie.release_date}</StyledTextP>
          </Col>
        </Row>
      ))
  )

export default WatchListPage
