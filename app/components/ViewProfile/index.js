import * as React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import { StyledGrid } from '../../../utils/commonStyle'
import { saveUserDb } from '../../containers/Login/action'
import Header from '../../containers/Header'
import { fetchUser } from './action'
import withReducer from '../../../utils/withReducer'
import getUserReducer from './reducer'

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
    if (JSON.stringify(this.props.userInfo) === JSON.stringify(ViewProfile.defaultProps.userInfo)) {
      this.props.fetchUser()
    }
  }

  componentDidUpdate() {
    const { items } = this.props.getUserReducer
    if (items.length > 0) {
      const { name, email, picture } = items[0];
      const payload = {
        name,
        email,
        picture,
      }
      if (JSON.stringify(this.props.userInfo) === JSON.stringify(ViewProfile.defaultProps.userInfo)) {
        this.props.saveUserDb(payload)
      }
    }
  }

  render() {
    const { name, email, picture } = this.props.userInfo;

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
  getUserReducer: state.getUserReducer,
})


export default withReducer('getUserReducer', getUserReducer)(connect(mapStateToProps, { saveUserDb, fetchUser })(ViewProfile))
