import * as React from 'react';
import { connect } from 'react-redux';
import { fetchRecommendations } from './action';
import recommendationReducer from './reducer'
import withReducer from '../../../utils/withReducer';
import RecommendationList from '../../components/RecommendationList';
import BaseLoading from '../../components/BaseLoading'
import { StyledRowExt } from '../../../utils/commonStyle'

type Props = {
  id: number,
  recommendations: Object,
  fetchRecommendations: () => void,
  loading: boolean,
}

export class Recommendations extends React.Component<Props> {
  state = {
    id: this.props.id || 1,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.id !== state.id) {
      props.fetchRecommendations(props.id);
      return {
        id: props.id,
      }
    }
    return null;
  }

  componentDidMount() {
    this.props.fetchRecommendations(this.state.id);
  }

  render() {
    const { recommendations, loading } = this.props;

    return (
      <BaseLoading loading={loading}>
        { recommendations.items.length > 0
          ? <StyledRowExt><h3>RecommendationList</h3><RecommendationList recommendations={recommendations.items} /></StyledRowExt>
          : ''}
      </BaseLoading>
    )
  }
}

export const mapStateToProps = state => ({
  recommendations: state.recommendationReducer,
  loading: state.recommendationReducer.isFetching,
})

export default withReducer('recommendationReducer', recommendationReducer)(connect(mapStateToProps, { fetchRecommendations })(Recommendations))
