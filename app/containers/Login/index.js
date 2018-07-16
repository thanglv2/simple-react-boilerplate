// @flow

import * as React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import styled from 'styled-components'
import { saveUserDb } from './action'

type Props = {
  history: Object,
  saveUserDb: () => void,
}
const StyledButtonLogin = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
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
      <Grid>
        <StyledButtonLogin>
          <FacebookLogin
            appId={process.env.FACEBOOk_APP_ID}
            autoLoad
            fields="name,email,picture"
            callback={this.responseFacebook}
            reauthenticate
          />
        </StyledButtonLogin>
      </Grid>
    )
  }
}

export default connect(null, { saveUserDb })(Facebook)
