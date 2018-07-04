import React from 'react'
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

const StyledHeart = styled(Glyphicon)`
  font-size: 1.1em;
  color: ${props => (props.heartcolor === 'true' ? 'yellow' : 'black')};
`

export default class BookMark extends React.Component {
  state = {
    bookMark: false,
  }
  componentDidUpdate() {
    const { filmId } = this.props;

    console.log('didMount')
    if (this.state.bookMark) {
      axios.post('http://localhost:3000/users', {
        filmId,
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
        <StyledHeart onClick={this.handleClick} glyph="heart" heartcolor={this.state.bookMark.toString()} />
      </StyledMeta>
    )
  }
}
