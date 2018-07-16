// @flow
import React, { Component } from 'react'

type Props = {
  options: [],
  onChange: () => void,
}


class Filter extends Component<Props> {
  onChange = (event) => {
    this.props.onChange(event.target.value)
  }

  render() {
    const { options } = this.props
    return (
      <form>
        <div className="form-group">
          <select onChange={this.onChange} className="form-control">
            {options.map(option => (
              <option value={option.name} key={option.id}>{option.name}</option>
            ))}
          </select>
        </div>
      </form>
    )
  }
}

export default Filter
