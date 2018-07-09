import * as React from 'react';
import { connect } from 'react-redux';
import { fetchRecommendations } from './action';
import recommendationReducer from './reducer'
import withReducer from '../../../utils/withReducer';
import RecommendationList from '../../components/RecommendationList';

type Props = {
  id: number,
  recommendations: Object,
  fetchRecommendations: () => void,
}

class Recommendations extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchRecommendations(this.props.id);
  }

  render() {
    const { recommendations } = this.props;

    return (
      <div>
        { recommendations !== undefined && <RecommendationList recommendations={recommendations.items} />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recommendations: state.recommendationReducer,
})

export default withReducer('recommendationReducer', recommendationReducer)(connect(mapStateToProps, { fetchRecommendations })(Recommendations))
