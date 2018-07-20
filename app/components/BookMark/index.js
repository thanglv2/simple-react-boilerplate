// @flow

import * as React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledMeta = styled.div`
  visibility: hidden;
  background-color: rgba(255,255,255,0.6);
  position: relative;
  top: -50px;
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

export const StyledBookMark = styled.i`
  font-size: 1.1em;
  color: ${props => (props.heartcolor === 'true' ? '#fa3a3a' : '')};
`

type Props = {
  filmId: number,
  films: Object,
  checkBookMark: boolean,
  handleBookMark: () => void,
}

class BookMark extends React.Component<Props> {
  handleClick = (e) => {
    e.preventDefault();
    this.props.handleBookMark(this.props.filmId);
  }

  render() {
    return (
      <StyledMeta className="meta">
        <StyledBookMark onClick={this.handleClick} className="fas fa-bookmark" heartcolor={`${this.props.checkBookMark}`} />
      </StyledMeta>
    )
  }
}

export default BookMark
