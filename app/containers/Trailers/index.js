import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { fetchTrailers } from './actions';
import trailerReducer from './reducer'
import withReducer from '../../../utils/withReducer';
import TrailerList from '../../components/TrailerList';
import BaseLoading from '../../components/BaseLoading'
import { StyledRowExt } from '../../../utils/commonStyle'

type Props = {
  id: number,
  trailers: Object,
  fetchTrailers: () => void,
  loading: boolean,
}

export class Trailers extends React.Component<Props> {
  state = {
    id: this.props.id || 1,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.id !== state.id) {
      props.fetchTrailers(props.id);
      return {
        id: props.id,
      }
    }
    return null;
  }

  componentDidMount() {
    this.props.fetchTrailers(this.state.id);
  }

  render() {
    const { loading } = this.props
    return (
      <BaseLoading loading={loading}>
        { this.props.trailers.items.length > 0
          ? <StyledRowExt><h3>Trailers</h3><TrailerList trailers={this.props.trailers.items} /></StyledRowExt>
          : ''}
      </BaseLoading>
    )
  }
}

export const mapStateToProps = state => ({
  trailers: state.trailerReducer,
  loading: state.trailerReducer.isFetching,
})

export default compose(
  withReducer('trailerReducer', trailerReducer),
  connect(mapStateToProps, { fetchTrailers }),
)(Trailers)
