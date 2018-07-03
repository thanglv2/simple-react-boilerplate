
import * as React from 'react';
import { connect } from 'react-redux';

import { fetchTrailers } from './actions';
import trailerList from './reducer'
import withReducer from '../../../utils/withReducer';
import TrailerList from '../../components/TrailerList';
import styled from 'styled-components';

type Props = {
  id: number,
  trailers: Object,
  fetchTrailers: () => void,
}

const Wrapper = styled.div`
  display: flex;
  overflow: scroll;
`

class Trailers extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchTrailers(this.props.id);
  }

  render() {
    return (
      <Wrapper>
        { this.props.trailers !== undefined && <TrailerList trailers={this.props.trailers.items} />}
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  trailers: state.trailerList,
})

export default withReducer('trailerList', trailerList)(connect(mapStateToProps, { fetchTrailers })(Trailers))
