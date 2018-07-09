// @flow

import * as React from 'react';
import styled from 'styled-components';

import { URL_IMG, IMG_SIZE_SMALL } from '../../../utils/constants'

const Wrapper = styled.div`
  display: flex;
  overflow: scroll;
`
const CastsList = ({ casts }: Array) =>
  (
    <Wrapper>
      { casts.length > 0 && casts.map(cast =>
        (
          <div className="card" key={cast.id}>
            <img className="card-img-top" src={`${URL_IMG}${IMG_SIZE_SMALL}${cast.profile_path}`} alt={cast.character} />
            <div className="card-body">
              <p className="card-text">{cast.name}</p>
              <p className="card-text">{cast.character}</p>
            </div>
          </div>
        ))}
    </Wrapper>
  )

export default CastsList

