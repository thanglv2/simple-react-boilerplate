// @flow

import * as React from 'react';
import { Row } from 'react-bootstrap'

import { StyledGrid } from '../../../utils/commonStyle'
import Poster from '../../components/Poster';
import Trailers from '../Trailers'
import Casts from '../Casts';
import Recommendations from '../Recommendations';
import Header from '../Header'

type Props = {
  match: {
    params: Object
  },
}

class MovieDetail extends React.Component<Props> {
  render() {
    const { id } = this.props.match.params;

    return (
      <StyledGrid>
        <Header />
        <Poster id={id} />
        <Row>
          <h3>Trailers</h3>
          <Trailers id={id} />
        </Row>
        <Row>
          <h3>Casts</h3>
          <Casts id={id} />
        </Row>
        <Row>
          <h3>Recommendations</h3>
          <Recommendations id={id} />
        </Row>
      </StyledGrid>
    )
  }
}


export default MovieDetail
