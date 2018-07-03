// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap'

import { fetchMovie } from './actions';
import withReducer from '../../../utils/withReducer';
import movieDetail from './reducer';
import Poster from '../../components/Poster';
import SearchFilm from '../Search'
import Trailers from '../Trailers'
import { StyledGrid } from '../../../utils/commonStyle'


type Props = {
  movie: Object,
  fetchMovie: () => void,
  match: {
    params: Object
  }
}

class MovieDetail extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  render() {
    const { movie } = this.props;

    return (
      <StyledGrid>
        <Row>
          <SearchFilm />
        </Row>
        {movie && movie.item && movie.item.poster_path && <Poster movie={movie} />}
        <Row>
          <h3>Trailers</h3>
          <Trailers className="abcd" id={this.props.match.params.id} />
        </Row>
      </StyledGrid>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.movieDetail ? state.movieDetail : undefined,
})

export default withReducer('movieDetail', movieDetail)(connect(mapStateToProps, { fetchMovie })(MovieDetail))
