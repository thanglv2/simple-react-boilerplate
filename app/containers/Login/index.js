// @flow

import * as React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { saveUserDb } from './action'

const StyledLoginBtn = styled(FacebookLogin)`
  background-color: blue;
`

type Props = {
  history: Object,
  saveUserDb: () => void,
}

export class Facebook extends React.Component<Props> {
  state = {
    isLoggedIn: false,
    name: '',
    email: '',
    picture: '',
    userID: '',
  };

  componentWillMount() {
    this.canSetState = true
  }

  componentWillUnmount() {
    this.canSetState = false
  }

  responseFacebook = response => {
    if (this.canSetState) {
      this.setState({
        isLoggedIn: true,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,
        userID: response.userID,
      });
    }
  };


  render() {
    const {
      picture, name, userID, isLoggedIn, email,
    } = this.state;

    if (isLoggedIn) {
      localStorage.setItem('userId', userID);
      this.props.history.push(`/u/${name}`);
      this.props.saveUserDb({
        name, userID, picture, email,
      })
    }

    return (
      <StyledLoginBtn
        cssClass="login-facebook-button"
        appId={process.env.FACEBOOk_APP_ID}
        autoLoad
        fields="name,email,picture"
        callback={this.responseFacebook}
        reauthenticate
        icon="fa-facebook"
      />
    )
  }
}

export default withRouter(connect(null, { saveUserDb })(Facebook))
