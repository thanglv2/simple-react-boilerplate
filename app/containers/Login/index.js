// @flow

import * as React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux'
import axios from 'axios'
import { saveUser } from './action'

type Props = {
  history: Object,
  saveUser: () => void,
}

class Facebook extends React.Component<Props> {
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

    const payload = {
      picture,
      name,
      email,
    }

    if (isLoggedIn) {
      localStorage.setItem('userId', userID);
      this.props.history.push(`/u/${name}`);
      this.props.saveUser(payload)
      axios.post('http://localhost:3000/users', {
        name,
        userID,
        picture,
        email,
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

export default connect(null, { saveUser })(Facebook)
