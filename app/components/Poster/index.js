// @flow

import * as React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Row, Col } from 'react-bootstrap';
import { StyledImage } from '../../../utils/commonStyle'
import { URL_IMG, IMG_SIZE_LARGE } from '../../../utils/constants';
import { fetchMovie } from './actions'
import withReducer from '../../../utils/withReducer'
import movieDetail from './reducer'

type Props = {
  fetchMovie: () => void,
  id: number,
  movie: Object,
}
export class Poster extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchMovie(this.props.id);
  }
  render() {
    const { item } = this.props.movie;

    return (
      Object.keys(item).length &&
      <Row>
        <Col xs={12} sm={6} md={4}>
          <StyledImage src={URL_IMG + IMG_SIZE_LARGE + item.poster_path} responsive />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <h1>{item.original_title}</h1>
          <h1>Overview: </h1>
          <p>{item.overview.length > 300 ? `${item.overview.substring(0, 250)}...` : item.overview}</p>
          <h1>Release_date</h1>
          <p>{item.release_date}</p>
        </Col>
      </Row>
    )
  }
}

export const mapStateToProps = state => ({
  movie: state.movieDetail,
})

export default compose(
  withReducer('movieDetail', movieDetail),
  connect(mapStateToProps, { fetchMovie })
)(Poster)
