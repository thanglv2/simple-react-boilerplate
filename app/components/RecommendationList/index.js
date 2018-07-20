// @flow

import * as React from 'react';
import styled from 'styled-components';

import { URL_IMG, IMG_SIZE_AVERAGE } from '../../../utils/constants'

const Wrapper = styled.div`
  display: flex;
  overflow: auto;
  justify-content: space-between;
`
const StyledRecommendation = styled.div`
  margin-right: 10px;
  margin-bottom: 7px;
`

const StyledImg = styled.img`
  border-radius: 5px;
`
const RecommendationList = ({ recommendations }: Array) => (
  <Wrapper>
    { recommendations.map(recommendation =>
      (
        <StyledRecommendation key={recommendation.id}>
          <StyledImg
            src={recommendation.backdrop_path ? `${URL_IMG}${IMG_SIZE_AVERAGE}${recommendation.backdrop_path}` : '/images/face.jpg'}
            alt={recommendation.title}
          />
          <p>{recommendation.title}</p>
        </StyledRecommendation>
      ))}
  </Wrapper>
)


export default RecommendationList
