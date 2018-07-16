import * as React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import { StyledGrid } from '../../../utils/commonStyle'
import { saveUserDb } from '../../containers/Login/action'
import Header from '../../containers/Header'
import { fetchUser } from './action'

const StyledDiv = styled.div`
  width: '400px';
  margin: 'auto';
  background: '#f4f4f4';
  padding: '20px';
`
type Props = {
  userInfo: Object,
  fetchUser: () => void,
  userInfo: { user: {}},
  fetchReducer: { user: {} }
}

export class ViewProfile extends React.Component<Props> {
  static defaultProps = {
    userInfo: {
      user: {
      },
    },
  }
  componentDidMount() {
    if (Object.keys(this.props.userInfo.user).length === 0) {
      this.props.fetchUser()
    }
  }

  render() {
    const userInfo = Object.keys(this.props.userInfo.user).length

    const { name, email, picture } = this.props[userInfo ? 'userInfo' : 'fetchReducer'].user

    return (
      <StyledGrid>
        <Header />
        <Row>
          <Col md={4} sm={6} xs={12}>
            <StyledDiv>
              <img src={picture} alt={this.name} />
              <h2>Welcome {name}</h2>
          Email: {email}
            </StyledDiv>
          </Col>
        </Row>
      </StyledGrid>
    )
  }
}

export const mapStateToProps = state => ({
  userInfo: state.userDbReducer,
  fetchReducer: state.fetchReducer,
})


export default connect(mapStateToProps, { saveUserDb, fetchUser })(ViewProfile)
