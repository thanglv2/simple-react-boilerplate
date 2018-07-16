import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchTrailers } from './actions';
import trailerReducer from './reducer'
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

export class Trailers extends React.Component<Props> {
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

export const mapStateToProps = state => ({
  trailers: state.trailerReducer,
})

export default compose(
  withReducer('trailerReducer', trailerReducer),
  connect(mapStateToProps, { fetchTrailers }),
)(Trailers)
