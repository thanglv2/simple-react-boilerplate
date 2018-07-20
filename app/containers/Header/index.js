// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'reactstrap'
import { withRouter, Link } from 'react-router-dom'
import styled from 'styled-components'

import { ButtonLanguage } from '../../components/ButtonLanguage'
import NavBar from '../../components/NavBar'
import SearchFilm from '../Search'
import { localeSet } from '../Home/actions'
import { filterFilm } from '../Filter/action'
import Login from '../Login'

const StyledDiv = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  background-color: #081c24;
  border-top: 10px solid #3fd376;
  padding: 20px 0;
`
const StyledRow = styled(Row)`
  justify-content: space-between;
`

const StyledImg = styled.img`
  cursor: pointer;
  height: 60px;
`
const StyledLeft = styled.div`
  display: flex;
  span:after {
    content: "/";
    height: 15px;
    margin-left: 5px;
  }
  span:nth-of-type(2):after {
    display: none;
  }
  span:nth-of-type(3) {
    margin: auto;
  }
  span:nth-of-type(2) {
    margin-right: 15px;
  }
  span button {
    border-color: #4267b2;
    cursor: pointer;
    background-color: #4267b2;
    border-radius: 4px;
    color: #fff;
    margin-right: 8px;
    font-size: 13px;
    &:focus {
      outline: none;
    }
    i {
      background: white;
      color: #4266b2;
      height: 16px;
      width: 16px;
      padding: 1px;
      margin: 6px;
    }
  }
`

type Props = {
  localeSet: () => void,
  history: Object,
}

export class Header extends React.Component<Props> {
  setLanguage = (lang) => {
    this.props.localeSet(lang);
  }

  render() {
    return (
      <StyledDiv>
        <Container>
          <StyledRow>
            <div>
              <Link to="/"><StyledImg alt="home logo" src="images/logo2.svg" className="img-fluid" /></Link>
            </div>
            <StyledLeft>
              <ButtonLanguage setLanguage={this.setLanguage} />
              { localStorage.getItem('userId') ?
                <NavBar />
                : <Login /> }
            </StyledLeft>
          </StyledRow>
          <Row>
            <Col md={12} sm={12} xs={12}>
              <SearchFilm searchText="" />
            </Col>
          </Row>
        </Container>
      </StyledDiv>
    )
  }
}

export default withRouter(connect(null, { localeSet, filterFilm })(Header))
