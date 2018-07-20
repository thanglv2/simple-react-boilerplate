// @flow
import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

type Props = {
  options: [],
  onChange: () => void,
  intl: boolean,
}


class Filter extends Component<Props> {
  onChange = (event) => {
    this.props.onChange(event.target.value)
  }

  render() {
    const { options, intl } = this.props
    return (
      <form>
        <div className="form-group">
          <select onChange={this.onChange} className="form-control">
            {options.map(option => (
              <option value={option.name} key={option.id}>
                {intl ? <FormattedMessage id={`${option.name}`} defaultMessage={`${option.name}`} /> : option.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    )
  }
}

export default Filter
