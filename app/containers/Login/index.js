// @flow

import * as React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux'
import { saveUserDb } from './action'

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

  responseFacebook = response => {
    this.setState({
      isLoggedIn: true,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      userID: response.userID,
    });
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
      <FacebookLogin
        appId={process.env.FACEBOOk_APP_ID}
        autoLoad
        fields="name,email,picture"
        callback={this.responseFacebook}
        reauthenticate
      />
    )
  }
}

export default connect(null, { saveUserDb })(Facebook)
