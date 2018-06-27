// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchMovie } from './actions';
import withReducer from '../../../utils/withReducer';
import movieDetail from './reducer';
import Poster from '../../components/Poster';
import SearchFilm from '../Search'

type Props = {
  movie: Object,
  fetchMovie: () => void,
  match: {
    params: Object
  }
}


class MovieDetail extends Component<Props> {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  render() {
    const { movie } = this.props;

    return (
      <div>
        <SearchFilm />
        {movie && movie.item && movie.item.poster_path && <Poster movie={movie} />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.movieDetail ? state.movieDetail : undefined,
})

export default withReducer('movieDetail', movieDetail)(connect(mapStateToProps, { fetchMovie })(MovieDetail))
