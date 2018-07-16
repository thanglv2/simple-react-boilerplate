import * as React from 'react';
import { connect } from 'react-redux';

import { fetchCasts } from './action';
import castsReducer from './reducer'
import withReducer from '../../../utils/withReducer';
import CastsList from '../../components/CastsList';

type Props = {
  id: number,
  casts: Object,
  fetchCasts: () => void,
}

export class Casts extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchCasts(this.props.id);
  }

  render() {
    const { casts } = this.props;

    return (
      <div>
        { casts !== undefined && <CastsList casts={casts.items} />}
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  casts: state.castsReducer,
})

export default withReducer('castsReducer', castsReducer)(connect(mapStateToProps, { fetchCasts })(Casts))
