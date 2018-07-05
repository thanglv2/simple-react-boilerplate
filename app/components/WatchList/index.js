import React from 'react'
import axios from 'axios'

class WatchList extends React.Component {
  componentDidMount() {
    console.log('componentDidMount')
    axios.get('http://localhost:3000/films')
      .then(response => console.log(response))
  }

  render() {
    return (
      <div><h1>WatchList</h1></div>
    )
  }
}

export default WatchList
