// @flow

import * as React from 'react';
import styled from 'styled-components';

import { URL_IMG, IMG_SIZE_AVERAGE } from '../../../utils/constants'

const Wrapper = styled.div`
  display: flex;
  overflow: scroll;
`
const RecommendationList = ({ recommendations }: Array) => (
  <Wrapper>
    { recommendations.length > 0 && recommendations.map(recommendation =>
      (
        <div key={recommendation.id}>
          <img src={`${URL_IMG}${IMG_SIZE_AVERAGE}${recommendation.backdrop_path}`} alt={recommendation.title} />
          <p>{recommendation.title}</p>
        </div>
      ))}
  </Wrapper>
)


export default RecommendationList
