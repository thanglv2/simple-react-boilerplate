// @flow

import * as React from 'react';
import FacebookLogin from 'react-facebook-login';
import styled from 'styled-components'
import { Row, Col, Button } from 'react-bootstrap'
import { StyledGrid } from '../../../utils/commonStyle'
import axios from 'axios'

const StyledDiv = styled.div`
  width: '400px';
  margin: 'auto';
  background: '#f4f4f4';
  padding: '20px';
`
type Props = {
  history: Object,
}
export default class Facebook extends React.Component<Props> {
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

  componentClicked = () => console.log('clicked');
  logout = () => {}
  redirectHome = () => {
    this.props.history.push('/')
  }

  render() {
    let fbContent;
    const { picture, name, userID } = this.state;

    if (this.state.isLoggedIn) {
      localStorage.setItem('userId', userID);

      axios.post('http://localhost:3000/users', {
        name,
        userID,
      })

      fbContent = (
        <StyledGrid>
          <Row>
            <Col md={4} sm={6} xs={12}>
              <StyledDiv>
                <img src={picture} alt={name} />
                <h2>Welcome {name}</h2>
          Email: {this.state.email}
              </StyledDiv>
            </Col>
            <Col md={4} sm={6} xs={12}>
              <Button onClick={this.logout} bsStyle="primary">Logout</Button>&nbsp;
              <Button onClick={this.redirectHome} bsStyle="success">Home</Button>&nbsp;
            </Col>
          </Row>
        </StyledGrid>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId={process.env.FACEBOOk_APP_ID}
          autoLoad
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          reauthenticate
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}
