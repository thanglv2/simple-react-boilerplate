// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { sortFilm } from './action'

type Props = {
  listOption: [],
  sortFilm: () => void,
}
class Sort extends Component<Props> {
  state = {
    value: '',
  }

  sortBy = () => {
    let sortBy;
    const { value } = this.state;
    if (value === 'Rating Ascending') {
      sortBy = 'vote_count.asc'
    } else if (value === 'Rating Descending') {
      sortBy = 'vote_count.desc'
    } else if (value === 'Release Date Ascending') {
      sortBy = 'release_date.asc'
    } else {
      sortBy = 'release_date.desc'
    }
    return sortBy;
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value }, () => {
      this.props.sortFilm(this.sortBy())
    });
  }

  render() {
    return (
      <form>
        <select onChange={this.handleChange} value={this.state.value}>
          {this.props.listOption.map(option =>
            <option value={option.name} key={option.id}>{option.name}</option>)}
        </select>
      </form>
    )
  }
}

export default connect(null, { sortFilm })(Sort)
