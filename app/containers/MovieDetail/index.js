// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid, Row, Col, Image } from 'react-bootstrap';


import { fetchMovie } from './actions';
import withReducer from '../../../utils/withReducer';
import movieDetail from './reducer';

import { URL_IMG, IMG_SIZE_LARGE } from '../../../utils/constants';

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
    return (
      <div>{this.props.movie && this.props.movie.item && this.props.movie.item.poster_path &&
        <Grid>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Image src={URL_IMG + IMG_SIZE_LARGE + this.props.movie.item.poster_path} responsive />
            </Col>
          </Row>
        </Grid>
      }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.movieDetail ? state.movieDetail : undefined,
})

export default withReducer('movieDetail', movieDetail)(connect(mapStateToProps, { fetchMovie })(MovieDetail))
