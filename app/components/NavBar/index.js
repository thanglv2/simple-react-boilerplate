// @flow

import * as React from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, CardImg } from 'reactstrap';
import styled from 'styled-components'

import { fetchUser } from '../ViewProfile/action'

type Props = {
  history: {
    push: () => void,
  },
  fetchUser: () => void,
  userInfo: Object,
  editUserReducer: Object,
  fetchReducer: Object,
}

const StyledDropdownItem = styled(DropdownItem)`
  &:focus {
    outline: none;
  }
  &:active {
    background-color: transparent;
  }
`
const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`
const StyledImg = styled(CardImg)`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`

const StyledP = styled.p`
  color: #fff;
  margin-bottom: auto;
  margin-top: auto;
  padding-left: 5px;
  padding-right: 5px;
`

const StyledDropdown = styled(Dropdown)`
  margin-bottom: auto;
  margin-top: auto;
`
const StyledDropdownToggle = styled(DropdownToggle)`
  &, &:hover, &:active {
    background-color: #081c25 !important;
    border: none;
  }
  &:focus {
    box-shadow: none !important;
  }
`

const StyledDropdownMenu = styled(DropdownMenu)`
  a {
    cursor: pointer;
  }
  button a:hover {
    text-decoration: none;
  }
`

export class NavBarCom extends React.Component<Props> {
  state = {
    dropdownOpen: false,
  }

  componentDidMount() {
    this.props.fetchUser()
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  logout = () => {
    localStorage.removeItem('userId')
    this.props.history.push('/')
  }


  render() {
    const userInfo = Object.keys(this.props.userInfo.user).length
    const editUserReducer = Object.keys(this.props.editUserReducer.user).length;

    const { name, picture } = this.props[editUserReducer ? 'editUserReducer' : (userInfo ? 'userInfo' : 'fetchReducer')].user
    const firstName = name ? name.split(' ').pop() : ''

    return (
      <StyledDiv>
        <StyledImg src={picture || '/images/logo.svg'} />
        <StyledP>{firstName}</StyledP>
        <StyledDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <StyledDropdownToggle caret />
          <StyledDropdownMenu right>
            <StyledDropdownItem><Link to="/u/:username">View Profile</Link></StyledDropdownItem>
            <StyledDropdownItem><Link to="/u/:username/watchlist">MarkedBook Films</Link></StyledDropdownItem>
            <StyledDropdownItem><Link to="/settings/profile">Edit Profile</Link></StyledDropdownItem>
            <StyledDropdownItem divider />
            <StyledDropdownItem tag="a" onClick={this.logout}>Logout</StyledDropdownItem>
          </StyledDropdownMenu>
        </StyledDropdown>
      </StyledDiv>
    )
  }
}

export const mapStateToProps = state => ({
  userInfo: state.userDbReducer,
  editUserReducer: state.editUserReducer,
  fetchReducer: state.fetchReducer,
})

export default withRouter(connect(mapStateToProps, { fetchUser })(NavBarCom))
