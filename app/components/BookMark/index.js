// @flow

import * as React from 'react';
import styled from 'styled-components'
import { Glyphicon } from 'react-bootstrap'

const StyledMeta = styled.div`
  visibility: hidden;
  background-color: rgba(255,255,255,0.9);
  position: relative;
  top: -40px;
  left: 0;
  height: 40px;
  width: 100%;
  z-index: 1;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledBookMark = styled(Glyphicon)`
  font-size: 1.1em;
  color: ${props => (props.heartcolor === 'true' ? '#fa3a3a' : '')};
`

type Props = {
  filmId: number,
  films: Object,
  checkBookMark: boolean,
  updateBookMark: () => void,
}

class BookMark extends React.Component<Props> {
  // state = {
  //   bookMark: this.props.checkBookMark,
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (prevState.bookMark !== nextProps.checkBookMark) {
  //     return {
  //       bookMark: nextProps.checkBookMark,
  //     }
  //   }
  //   return null
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // const { filmId } = this.props;
  //   // const userId = localStorage.getItem('userId');
  //   // if (this.state.bookMark && !prevState.bookMark) {
  //   //   this.props.saveFilm({ filmId, userId, bookMark: true })
  //   // }

  //   // if (!this.state.bookMark && prevState.bookMark && filmId) {
  //   //   const { items } = this.props.films;
  //   //   this.props.updateFilm(items.id, { bookMark: false })
  //   // }
  //   // if (!this.state.bookMark && filmId) {
  //   //   axios.get('http://localhost:3000/films').then(({ data }) => {
  //   //     const { id } = data.find(item => item.filmId === filmId)

  //   //     axios.patch(`http://localhost:3000/films/${id}`, {
  //   //       bookMark: false,
  //   //     })
  //   //   })
  //   // }
  // }

  handleClick = (e) => {
    e.preventDefault();
    this.props.updateBookMark(this.props.filmId);
  }

  render() {
    return (
      <StyledMeta className="meta">
        <StyledBookMark onClick={this.handleClick} glyph="bookmark" heartcolor={this.props.checkBookMark.toString()} />
      </StyledMeta>
    )
  }
}

// const mapStateToProps = state => ({
//   films: state.filmsReducer,
// })

export default BookMark
