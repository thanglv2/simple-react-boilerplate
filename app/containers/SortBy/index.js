// @flow

import * as React from 'react';
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import { sortFilm } from './action'

type Props = {
  sortOptions: [],
  sortFilm: () => void,
}
class Sort extends React.Component<Props> {
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
        <div className="form-group">
          <select onChange={this.handleChange} className="form-control">
            {this.props.sortOptions.map(option =>
              (
                <option value={option.name} key={option.id}>
                  <FormattedMessage id={`${option.name}`} defaultMessage={`${option.name}`} />
                </option>
              ))}
          </select>
        </div>
      </form>
    )
  }
}

export default connect(null, { sortFilm }, null, { pure: false })(Sort)
