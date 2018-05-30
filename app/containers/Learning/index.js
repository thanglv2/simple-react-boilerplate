import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Input from 'components/Input'
import { setKeyword } from './actions'
import { documents } from './constants'

export class Learning extends React.Component {
  renderLearningLink(keyword) {
    return ['react', 'redux', 'react-router', 'webpack'].indexOf(keyword) > -1 && (
      <div className="text-center mb-3">
        <a href={documents[keyword]} target="_blank" >
          Read documents
        </a>
      </div>
    )
  }

  render() {
    const { keyword, username, onChangeKeyword } = this.props
    return (
      <div className="d-flex flex-column mt-4">
        <p className="d-flex justify-content-center text-center">
          Hello {username || 'anonymous person'}! <br />
          What do you want to learn? <br />
          (React, Redux, React-router, Webpack)
        </p>
        <div className="d-flex justify-content-center mb-3">
          <Input value={keyword} onChange={onChangeKeyword} />
        </div>
        {this.renderLearningLink(keyword.toLowerCase())}
        <div className="d-flex justify-content-center">
          <button>
            <Link to="/">Go Home</Link>
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ learning, global }) => ({
  keyword: learning.keyword,
  username: global.username,
})

export const mapDispatchToProps = (dispatch) => ({
  onChangeKeyword: (keyword) => dispatch(setKeyword(keyword)),
})

Learning.propTypes = {
  username: PropTypes.string,
  keyword: PropTypes.string,
  onChangeKeyword: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Learning)
