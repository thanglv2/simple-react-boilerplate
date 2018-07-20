// @flow

import * as React from 'react';
import styled from 'styled-components';
import { Card, CardBody, CardText } from 'reactstrap'

import { URL_IMG, IMG_SIZE_SMALL } from '../../../utils/constants'

const Wrapper = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: auto;
`

const StyledCard = styled(Card)`
  min-width: auto;
  border: 1px solid #e3e3e3;
  margin-right: 10px;
  margin-bottom: 7px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`
const StyledImg = styled.img`
  max-height: 150px;
  margin: 0 auto;
  display: block;
`
const CastsList = ({ casts }: Array) =>
  (
    <Wrapper>
      { casts.map(cast =>
        (
          <StyledCard key={cast.id}>
            <StyledImg
              top
              src={cast.profile_path ? `${URL_IMG}${IMG_SIZE_SMALL}${cast.profile_path}` : '/images/face.jpg'}
              alt={cast.character}
              className="img-fluid"
            />
            <CardBody>
              <CardText>{cast.name}</CardText>
              <CardText>{cast.character}</CardText>
            </CardBody>
          </StyledCard>
        ))}
    </Wrapper>
  )

export default CastsList

