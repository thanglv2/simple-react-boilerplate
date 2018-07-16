// @flow

import * as React from 'react';
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const StyledNav = styled.nav`
  display: ${props => (props.display === 'true' ? 'block' : 'none')};
  position: absolute;
  right: 0;
  top: 100%;
  background-color: #fff;
  border-radius: 5px;
  color: #000;
  text-align: left;
  z-index: 2;
  ul {
    padding: 0;
    list-style: none;
    border-radius: 4px;
    width: 150px;
    box-shadow: 0 4px 10px #00000026;
 
    margin-bottom: 0;
 
    li {
      cursor: pointer;
      padding: 10px 20px;
      transition: all 0.4s;
      &:hover {
        a {
          color: white;
          text-decoration: none;
        }
        
        background-color: black;
      }
    }
  }
`

const StyledNavRight = styled.div`
  position: relative;
`

const StyledButtonView = styled(Button)`
  border-radius: 50%;
  cursor: pointer;
  &&& {
    outline: none;
  }
`
type Props = {
  handleClick: () => void,
  logout: () => void,
  history: {
    push: () => void,
  }
}
export class NavBar extends React.Component<Props> {
  state = {
    display: false,
  }

  handleClick = () => {
    this.setState({ display: !this.state.display })
  }

  logout = () => {
    localStorage.removeItem('userId')
    this.props.history.push('/')
  }

  render() {
    return (
      <StyledNavRight className="pull-right">
        <StyledButtonView bsStyle="info" onClick={this.handleClick}>Vagabond</StyledButtonView>
        <StyledNav display={this.state.display.toString()}>
          <ul>
            <li>
              <Link to="/u/:username">View Profile</Link>
            </li>
            <li>
              <Link to="/u/:username/watchlist">Watch Lists</Link>
            </li>
            <li>
              <Link to="/settings/profile">Edit Profile</Link>
            </li>
            <li>
              <a onClick={this.logout}>Logout</a>
            </li>
          </ul>
        </StyledNav>
      </StyledNavRight>
    )
  }
}

export default withRouter(NavBar)
