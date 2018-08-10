// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap'
import { FormattedMessage } from 'react-intl'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import Filter from '../Filter'
import Sort from '../SortBy'
import { sortOptions, filterByCountryOptions, filterByYear, countryObject } from '../../../utils/dataOptions'
import { filterFilm } from '../Filter/action'
import { searchMovie } from '../Search/actions'
import { fetchMovies } from './actions';
import LoadingFilm from '../../components/LoadingFilm';
import MovieList from '../MovieList';
import Pagination from '../Pagination'
import { StyledGrid, StyledRow } from '../../../utils/commonStyle'
import Header from '../Header'
import Footer from '../../components/Footer'


type Props = {
  fetchMovies: () => void,
  searchMovie: () => void,
  filterFilm: () => void,
  location: {
    pathname: String,
  },
  movies: Object,
  match: {
    params: {
      searchText: String,
    }
  },
}

export class Home extends React.Component<Props> {
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
    const { searchText } = this.props.match.params;
    const { pathname } = this.props.location;
    if (prevProps.match.params.searchText !== searchText) {
      this.props.searchMovie(searchText)
    }
    if (prevProps.location.pathname !== pathname && pathname === '/') {
      this.props.fetchMovies();
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
      <React.Fragment>
        <Header />
        <StyledGrid>
          <StyledRow>
            <Col md={4} sm={4} xs={12} className="flexEnd">
              <FormattedMessage id="filter_country" defaultMessage="Filter by country" />
              <Filter options={filterByCountryOptions} onChange={this.onCountryChange} intl />
            </Col>
            <Col md={4} sm={4} xs={12} className="flexEnd">
              <FormattedMessage id="filter_year" defaultMessage="Filter by release_year" />
              <Filter options={filterByYear} onChange={this.onYearChange} intl={false} />
            </Col>
            <Col md={4} sm={4} xs={12} className="flexEnd">
              <FormattedMessage id="sort" defaultMessage="Sort" />
              <Sort sortOptions={sortOptions} />
            </Col>
          </StyledRow>
          { items.length === 0 && <LoadingFilm /> }
          { items.length > 0 && <MovieList movies={pageOfItems} /> }
          <Pagination items={items} onChangePage={this.onChangePage} />
        </StyledGrid>
        <Footer />
      </React.Fragment>
    )
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movieList,
})

export default compose(
  withRouter,
  connect(mapStateToProps, {
    fetchMovies, searchMovie, filterFilm,
  }),
)(Home)
