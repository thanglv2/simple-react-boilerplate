import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import styled from 'styled-components'

import { Row, Button, Col } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import SearchFilm from '../Search'
import Filter from '../Filter'
import Sort from '../SortBy'
import { sortOptions, filterByCountryOptions, filterByYear, countryObject } from '../../../utils/dataOptions'
import { localeSet } from '../Home/actions'
import { filterFilm } from '../Filter/action'


const StyledButtonView = styled(Button)`
  border-radius: 50%;
  cursor: pointer;
  &&& {
    outline: none;
  }
`
const StyledNav = styled.nav`
  display: ${props => (props.display === 'true' ? 'block' : 'none')};
  position: absolute;
  right: 0;
  top: 100%;
  background-color: #fff;
  border-radius: 5px;
  color: #000;
  text-align: left;
  z-index: 2;
  ul {
    padding: 0;
    list-style: none;
    border-radius: 4px;
    width: 150px;
    box-shadow: 0 4px 10px #00000026;

    margin-bottom: 0;

    li {
      padding: 10px 20px;
      transition: all 0.4s;
      &:hover {
        a {
          color: white;
          text-decoration: none;
        }
        
        background-color: black;
      }
    }
  }
`

const StyledNavRight = styled.div`
  position: relative;
`
type Props = {
  filterFilm: () => void,
  localeSet: () => void,
  history: Object,
}

class Header extends React.Component<Props> {
  state = {
    display: false,
  }

  onCountryChange = (value) => {
    this.props.filterFilm(countryObject[value]);
  }

  onYearChange = (value) => {
    this.props.filterFilm(parseInt(value, 10))
  }
  setLanguage = (lang) => {
    this.props.localeSet(lang);
  }

  hanleLogin = () => {
    this.props.history.push('/login')
  }

  handleClick = () => {
    this.setState({ display: !this.state.display })
  }

  logout = () => {
    localStorage.removeItem('userId')
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <Row>
          <Button onClick={() => this.props.localeSet('en')} bsStyle="primary">EN</Button>&nbsp;
          <Button onClick={() => this.props.localeSet('vi')} bsStyle="success">VI</Button>&nbsp;
          { localStorage.getItem('userId') ?
            <StyledNavRight className="pull-right">
              <StyledButtonView bsStyle="info" onClick={this.handleClick}>Vagabond</StyledButtonView>
              <StyledNav display={this.state.display.toString()}>
                <ul>
                  <li>
                    <Link to="/u/:username">View Profile</Link>
                  </li>
                  <li>
                    <Link to="/u/:username/watchlist">Watch Lists</Link>
                  </li>
                  <li>
                    <Link to="/settings/profile">Edit Profile</Link>
                  </li>
                  <li>
                    <a onClick={this.logout}>Logout</a>
                  </li>
                </ul>
              </StyledNav>
            </StyledNavRight>
            : <Button onClick={this.hanleLogin} bsStyle="info" className="pull-right">Login</Button> }

        </Row>
        <Row>
          <Col md={3} sm={3} xs={12}>
            <FormattedMessage id="filter_country" defaultMessage="Filter by country" />
            <Filter options={filterByCountryOptions} onChange={this.onCountryChange} />
          </Col>
          <Col md={3} sm={3} xs={12}>
            <FormattedMessage id="filter_year" defaultMessage="Filter by release_year" />
            <Filter options={filterByYear} onChange={this.onYearChange} />
          </Col>
          <Col md={3} sm={3} xs={12}>
            <Sort sortOptions={sortOptions} />
          </Col>
          <Col md={3} sm={3} xs={12}>
            <SearchFilm searchText="" />
          </Col>
        </Row>
      </div>
    )
  }
}


export default withRouter(connect(null, { localeSet, filterFilm })(Header))
