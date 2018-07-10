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
  saveUserDb: () => void,
  fetchUser: () => void,
  getUserReducer: Object,
}

export class ViewProfile extends React.Component<Props> {
  static defaultProps = {
    userInfo: {
      name: '',
      email: '',
      picture: '',
    },
  }

  componentDidMount() {
    this.props.fetchUser()
    console.log(this.props.userInfo.items, 'this.props.userInfo.items')
    if (JSON.stringify(this.props.userInfo.items) === JSON.stringify(ViewProfile.defaultProps.userInfo)) {
      this.props.fetchUser()
    }
  }

  componentDidUpdate() {
    const { items } = this.props.fetchReducer
    console.log('items')
    console.log(this.props.fetchReducer.items, 'this.props.fetchReducer')
    if (items) {
      const { name, email, picture } = items;
      const payload = {
        name,
        email,
        picture,
      }
      if (JSON.stringify(this.props.userInfo.items) === JSON.stringify(ViewProfile.defaultProps.userInfo)) {
        this.props.saveUserDb(payload)
      }
    }
  }

  render() {
    const { name, email, picture } = this.props.userInfo.items;

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
