// @flow

import * as React from 'react';
import styled from 'styled-components'
import { Glyphicon } from 'react-bootstrap'
import axios from 'axios'

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
}

export default class BookMark extends React.Component<Props> {
  state = {
    bookMark: false,
  }

  componentDidUpdate() {
    const { filmId } = this.props;
    const userId = localStorage.getItem('userId');

    if (this.state.bookMark) {
      axios.post('http://localhost:3000/films', {
        filmId,
        userId,
        bookMark: true,
      })
    }

    if (!this.state.bookMark && filmId) {
      axios.get('http://localhost:3000/films').then(({ data }) => {
        const { id } = data.find(item => item.filmId === filmId)

        axios.patch(`http://localhost:3000/films/${id}`, {
          bookMark: false,
        })
      })
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ bookMark: !this.state.bookMark })
  }

  render() {
    return (
      <StyledMeta className="meta">
        <StyledBookMark onClick={this.handleClick} glyph="bookmark" heartcolor={this.state.bookMark.toString()} />
      </StyledMeta>
    )
  }
}
