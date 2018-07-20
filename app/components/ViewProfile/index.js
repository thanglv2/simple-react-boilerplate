import * as React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'

import { StyledGrid, StyledRow } from '../../../utils/commonStyle'
import { saveUserDb } from '../../containers/Login/action'
import Header from '../../containers/Header'
import { fetchUser } from './action'
import Footer from '../Footer';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledH3 = styled.h3`
  padding: 10px;
`
type Props = {
  fetchUser: () => void,
  userInfo: Object,
  editUserReducer: Object,
  fetchReducer: Object,
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
    const editUserReducer = Object.keys(this.props.editUserReducer.user).length;

    const { name, picture, email } = this.props[editUserReducer ? 'editUserReducer' : (userInfo ? 'userInfo' : 'fetchReducer')].user

    return (
      <React.Fragment>
        <Header />
        <StyledGrid>
          <StyledRow>
            <Col md={12} sm={12} xs={12}>
              <StyledDiv>
                <StyledH3>Welcome {name}</StyledH3>
                <img src={picture} alt={this.name} />
                <StyledH3>Email: {email}</StyledH3>
              </StyledDiv>
            </Col>
          </StyledRow>
        </StyledGrid>
        <Footer />
      </React.Fragment>
    )
  }
}

export const mapStateToProps = state => ({
  userInfo: state.userDbReducer,
  fetchReducer: state.fetchReducer,
  editUserReducer: state.editUserReducer,
})


export default connect(mapStateToProps, { saveUserDb, fetchUser })(ViewProfile)
