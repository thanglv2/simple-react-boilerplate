import * as React from 'react';
import { connect } from 'react-redux';
import { Row, Button, Col } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import { withRouter } from 'react-router-dom'
import { ButtonLanguage } from '../../components/ButtonLanguage'
import NavBar from '../../components/NavBar'
import SearchFilm from '../Search'
import Filter from '../Filter'
import Sort from '../SortBy'
import { sortOptions, filterByCountryOptions, filterByYear, countryObject } from '../../../utils/dataOptions'
import { localeSet } from '../Home/actions'
import { filterFilm } from '../Filter/action'

type Props = {
  filterFilm: () => void,
  localeSet: () => void,
  history: Object,
}

export class Header extends React.Component<Props> {
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

  redirectHome = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <ButtonLanguage setLanguage={this.setLanguage} />
          { localStorage.getItem('userId') ?
            <NavBar logout={this.logout} handleClick={this.handleClick} />
            : <Button onClick={this.hanleLogin} bsStyle="info" className="pull-right">Login</Button> }

          <Button onClick={this.redirectHome} bsStyle="success">Home</Button>&nbsp;
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
      </React.Fragment>
    )
  }
}

export default withRouter(connect(null, { localeSet, filterFilm })(Header))
