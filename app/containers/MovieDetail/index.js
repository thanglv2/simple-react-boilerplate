// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { Row, Button } from 'react-bootstrap'

import { fetchMovie } from './actions';
import withReducer from '../../../utils/withReducer';
import movieDetail from './reducer';
import Poster from '../../components/Poster';
import SearchFilm from '../Search'
import Trailers from '../Trailers'
import { StyledGrid } from '../../../utils/commonStyle'
import Casts from '../Casts';
import Recommendations from '../Recommendations';


type Props = {
  movie: Object,
  fetchMovie: () => void,
  match: {
    params: Object
  },
  history: Object,
}

export class MovieDetail extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  redirectHome = () => {
    this.props.history.push('/')
  }

  render() {
    const { movie } = this.props;

    return (
      <StyledGrid>
        <Row>
          <SearchFilm />
          <Button onClick={this.redirectHome} bsStyle="success">Home</Button>&nbsp;
        </Row>
        {movie && movie.item && movie.item.poster_path && <Poster movie={movie} />}
        <Row>
          <h3>Trailers</h3>
          <Trailers id={this.props.match.params.id} />
        </Row>
        <Row>
          <h3>Casts</h3>
          <Casts id={this.props.match.params.id} />
        </Row>
        <Row>
          <h3>Recommendations</h3>
          <Recommendations id={this.props.match.params.id} />
        </Row>
      </StyledGrid>
    )
  }
}

export const mapStateToProps = state => ({
  movie: state.movieDetail,
})

export default withReducer('movieDetail', movieDetail)(connect(mapStateToProps, { fetchMovie })(MovieDetail))
