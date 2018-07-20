// @flow

import * as React from 'react';

import { StyledGrid, StyledRow } from '../../../utils/commonStyle'
import Poster from '../../components/Poster';
import Trailers from '../Trailers'
import Casts from '../Casts';
import Recommendations from '../Recommendations';
import Header from '../Header'
import Footer from '../../components/Footer';


type Props = {
  match: {
    params: Object
  },
}

class MovieDetail extends React.Component<Props> {
  componentDidMount() {

  }
  render() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <Header />
        <StyledGrid>
          <Poster id={id} />
          <Trailers id={id} />
          <Casts id={id} />
          <Recommendations id={id} />
        </StyledGrid>
        <Footer />
      </React.Fragment>
    )
  }
}

export default MovieDetail
