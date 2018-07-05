import * as React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import axios from 'axios'
import { Row, Col, Button } from 'react-bootstrap'
import { StyledGrid } from '../../../utils/commonStyle'
import { saveUser } from '../../containers/Login/action'

const StyledDiv = styled.div`
  width: '400px';
  margin: 'auto';
  background: '#f4f4f4';
  padding: '20px';
`
type Props = {
  picture: string,
  name: string,
  email: string,
  userInfo: Object,
  history: Object,
  saveUser: () => void,
}

class ViewProfile extends React.Component<Props> {
  static defaultProps = {
    userInfo: {
      name: '',
      email: '',
      picture: '',
    },
  }
  componentDidMount() {
    if (typeof this.props.userInfo === 'undefined') {
      axios.get('http://localhost:3000/users')
        .then(({ data }) => {
          console.log(data)
          const { name, email, picture } = data[0];
          console.log(name, 'name')
          const payload = {
            name,
            email,
            picture,
          }

          this.props.saveUser(payload)
        })
    }
  }
  redirectHome = () => {
    this.props.history.push('/')
  }
  handleWatchList = () => {
    console.log('handleWatchList')
    this.props.history.push(`/u/${this.props.userInfo.name}/watchlist`);
  }
  render() {
    const { name, email, picture } = this.props.userInfo;
    return (
      <StyledGrid>
        <Row>
          <Col md={4} sm={6} xs={12}>
            <StyledDiv>
              <img src={picture} alt={this.name} />
              <h2>Welcome {name}</h2>
          Email: {email}
            </StyledDiv>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <Button onClick={this.redirectHome} bsStyle="success">Home</Button>&nbsp;
            <Button onClick={this.handleWatchList} bsStyle="info">WatchList</Button>&nbsp;
          </Col>
        </Row>
      </StyledGrid>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.userReducer.payload,
})


export default connect(mapStateToProps, { saveUser })(ViewProfile)
