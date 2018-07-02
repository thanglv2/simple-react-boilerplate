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
        <select onChange={this.onChange}>
          {options.map(option => (
            <option value={option.name} key={option.id}>{option.name}</option>
          ))}
        </select>
      </form>
    )
  }
}

export default Filter
