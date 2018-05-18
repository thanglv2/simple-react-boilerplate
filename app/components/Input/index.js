import React from 'react'
import PropTypes from 'prop-types'

export default class Input extends React.PureComponent {
  render() {
    const { value, onChange } = this.props
    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    )
  }
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}
