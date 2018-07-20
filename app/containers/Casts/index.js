import * as React from 'react';
import { connect } from 'react-redux';

import { fetchCasts } from './action';
import castsReducer from './reducer'
import withReducer from '../../../utils/withReducer';
import CastsList from '../../components/CastsList';
import BaseLoading from '../../components/BaseLoading'
import { StyledRowExt } from '../../../utils/commonStyle'

type Props = {
  id: number,
  casts: Object,
  fetchCasts: () => void,
  loading: boolean,
}

export class Casts extends React.Component<Props> {
  state = {
    id: this.props.id || 1,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.id !== state.id) {
      props.fetchCasts(props.id);
      return {
        id: props.id,
      }
    }
    return null;
  }

  componentDidMount() {
    this.props.fetchCasts(this.state.id);
  }

  render() {
    const { casts, loading } = this.props;

    return (
      <BaseLoading loading={loading}>
        { casts.items.length > 0
          ? <StyledRowExt><h3>Casts</h3><CastsList casts={casts.items} /></StyledRowExt>
          : ''}
      </BaseLoading>
    )
  }
}

export const mapStateToProps = state => ({
  casts: state.castsReducer,
  loading: state.castsReducer.isFetching,
})

export default withReducer('castsReducer', castsReducer)(connect(mapStateToProps, { fetchCasts })(Casts))
