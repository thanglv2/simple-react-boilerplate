// @flow

import * as React from 'react';
import styled from 'styled-components'
import { URL_YOUTUBE } from './const';

const Wrapper = styled.div`
  display: flex;
  overflow: auto;
  justify-content: space-between;
`

type Props = {
  trailers: Array<Object>
}

const TrailerList = ({ trailers }: Props) => (
  <Wrapper>
    { trailers.map(trailer => <iframe title={trailer.key} src={`${URL_YOUTUBE}${trailer.key}`} allowFullScreen key={trailer.key} />) }
  </Wrapper>
)


export default TrailerList
