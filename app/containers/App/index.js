import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Input from 'components/Input'
import { setUsername } from './actions'

export class App extends React.Component {
  render() {
    const { username, onChangeUsername } = this.props
    return (
      <div className="d-flex flex-column mt-4">
        <p className="d-flex justify-content-center">
          This is simple react app! <br />
          Please type your name:
        </p>
        <div className="d-flex justify-content-center mb-4">
          <Input value={username} onChange={onChangeUsername} />
        </div>
        <div className="d-flex justify-content-center">
          <button>
            <Link to="/learning">Go to Learning Page</Link>
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ global }) => ({
  username: global.username,
})

export const mapDispatchToProps = (dispatch) => ({
  onChangeUsername: (value) => dispatch(setUsername(value)),
})

App.propTypes = {
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
