// @flow

import * as React from 'react';
import { Row, Col } from 'reactstrap'
import { URL_IMG, IMG_SIZE_LARGE } from '../../../utils/constants'
import { StyledImage } from '../../../utils/commonStyle'
import styled from 'styled-components'

const StyledP = styled.p`
  font-size: 1em;
  line-height: 1.4em;
`

const StyledColumn = styled(Col)`
  margin: auto;
`
const StyledRow = styled(Row)`
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  background-color: #fff;
  margin-bottom: 15px;
`
const StyledTextH1 = styled.h1`
  font-size:1.2rem;
  font-weight: 700;
`

const WatchListPage = ({ bookMarkedMovies }: Array) =>
  (
    bookMarkedMovies.map(bookMarkedMovie =>
      (
        <StyledRow key={bookMarkedMovie.id}>
          <Col xs={6} sm={3} md={3} key={bookMarkedMovie.id}>
            <StyledImage src={URL_IMG + IMG_SIZE_LARGE + bookMarkedMovie.poster_path} className="img-fluid" />
          </Col>
          <StyledColumn xs={6} sm={9} md={9}>
            <StyledTextH1>{bookMarkedMovie.original_title}</StyledTextH1>
            <StyledTextH1>Overview: </StyledTextH1>
            <StyledP>{bookMarkedMovie.length > 70 ? `${bookMarkedMovie.substring(0, 70)}...` : bookMarkedMovie.overview}</StyledP>
            <StyledTextH1>Release_date</StyledTextH1>
            <StyledP>{bookMarkedMovie.release_date}</StyledP>
          </StyledColumn>
        </StyledRow>
      ))
  )

export default WatchListPage
