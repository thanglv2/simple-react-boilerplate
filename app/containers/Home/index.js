// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'
import { Button, Row, Col } from 'react-bootstrap'

import { searchMovie } from '../Search/actions'
import { filterFilm } from '../Filter/action'
import { fetchMovies, localeSet } from './actions';
import LoadingFilm from '../../components/LoadingFilm';
import MovieList from '../../components/MovieList';
import SearchFilm from '../Search'
import Pagination from '../Pagination'
import Sort from '../SortBy'
import Filter from '../Filter'
import { sortOptions, filterByCountryOptions, filterByYear, countryObject } from '../../../utils/dataOptions'
import { StyledGrid } from '../../../utils/commonStyle'


type Props = {
  fetchMovies: () => void,
  movies: Object,
  match: Object,
  searchMovie: () => void,
  filterFilm: () => void,
  localeSet: () => void,
}

class Home extends React.Component<Props> {
  state = {
    pageOfItems: [],
  }

  componentDidMount() {
    if (!this.props.match.params.searchText) {
      this.props.fetchMovies();
    } else {
      this.props.searchMovie(this.props.match.params.searchText)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.searchText !== this.props.match.params.searchText) {
      this.props.searchMovie(this.props.match.params.searchText)
    }
  }

  onChangePage = (pageOfItems) => {
    this.setState({ pageOfItems });
  }

  onCountryChange = (value) => {
    this.props.filterFilm(countryObject[value]);
  }

  onYearChange = (value) => {
    this.props.filterFilm(parseInt(value, 10))
  }


  render() {
    const { items } = this.props.movies;
    const { pageOfItems } = this.state;

    return (
      <StyledGrid>
        <Row>
          <Button onClick={() => this.props.localeSet('en')} bsStyle="primary">EN</Button> |
          <Button onClick={() => this.props.localeSet('vi')} bsStyle="success">VI</Button>
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
        { items.length === 0 && <LoadingFilm /> }
        { items.length > 0 && <MovieList movies={pageOfItems} /> }
        <Pagination items={items} onChangePage={this.onChangePage} />
      </StyledGrid>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movieList,
})

export default connect(mapStateToProps, {
  fetchMovies, searchMovie, filterFilm, localeSet,
})(Home)
