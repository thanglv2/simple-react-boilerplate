// @flow
import * as React from 'react';
import Autosuggest from 'react-autosuggest'
import { withRouter } from 'react-router-dom';

import theme from './search.css'
import { StyledImage } from '../../../utils/commonStyle'
import logo from '../../../public/images/logo_square.svg'
import { URL_IMG, IMG_SIZE_XSMALL } from '../../../utils/constants'
import { searchMovieApi } from './service';

type Props = {
  history: Object,
}

export class SearchFilm extends React.Component<Props> {
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
    const trimmedValue = value ? value.trim() : '';

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

    if (method === 'enter' || method === 'click') {
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
        <StyledImage className="searchResult-image img-fluid" src={suggestion.poster_path === null ? '/images/logo.svg' : URL_IMG + IMG_SIZE_XSMALL + suggestion.poster_path} />
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
      className: 'form-control',
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


export default withRouter(SearchFilm)
