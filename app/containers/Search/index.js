// @flow
import * as React from 'react';
import Autosuggest from 'react-autosuggest'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom';

import theme from './search.css'
import { movieList } from '../Home/reducer'
import withReducer from '../../../utils/withReducer'
import { searchMovie } from './actions'
import { StyledImage } from '../../../utils/commonStyle'
import logo from '../../../internals/images/logo_square.svg'
import { URL_IMG, IMG_SIZE_XSMALL } from '../../../utils/constants'
import { searchMovieApi } from './service';

type Props = {
  history: Object,
  movies: Object,
}
class SearchFilm extends React.Component<Props> {
  state = {
    value: '',
    suggestions: [],
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 0) {
      searchMovieApi(trimmedValue).then(({ data }) => {
        this.setState({
          suggestions: data.results,
        })
      })
    } else {
      this.setState({ suggestions: [] })
    }
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onSuggestionSelected = (event, { suggestion, method }) => {
    event.preventDefault();

    if (method === 'enter') {
      this.props.history.push(`/movie/${suggestion.id}`);
      this.setState({ value: '' });
    }
  };

  getSuggestionValue = (suggestion) => suggestion.title

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      return this.handleSubmit(this.state.value);
    }
  }

  handleSubmit = (searchText) => {
    this.props.history.push(`/search/${searchText}`);
  }

  renderSuggestion = (suggestion) =>
    (
      <a>
        <StyledImage className="searchResult-image" src={suggestion.poster_path === null ? logo : URL_IMG + IMG_SIZE_XSMALL + suggestion.poster_path} />
        <div className="searchResult-text">
          <div className="searchResult-name">
            {suggestion.title}
          </div>
          {suggestion.release_date}
        </div>
      </a>
    )

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Search Movie Title...',
      value,
      onKeyPress: this.handleKeyDown,
      onChange: this.onChange,
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movieList,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { searchMovie }),
  withReducer('movieList', movieList),
)(SearchFilm)
