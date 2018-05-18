import React from 'react';
import { Link } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <p>
          This is simple react app
        </p>
        <Link to="/about">
          <button>Go to About</button>
        </Link>
      </div>
    )
  }
}
