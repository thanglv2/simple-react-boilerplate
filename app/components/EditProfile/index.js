import * as React from 'react';
import { StyledGrid } from '../../../utils/commonStyle'
import { connect } from 'react-redux'
import { fetchUser } from '../ViewProfile/action'
import { updateUser } from './action'
import Header from '../../containers/Header'

type Props = {
  fetchUser: () => void,
  updateUser: () => void,
  fetchReducer: {
    user: {
      name: String,
      email: string,
      picture: string,
    }
  },
}

export class EditProfile extends React.Component<Props> {
  static defaultProps = {
    userInfo: {
      user: {},
    },
  }
  state = {
    name: '',
    email: '',
    picture: '',
    userId: localStorage.getItem('userId'),
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  componentDidUpdate(prevProps) {
    if (this.props.fetchReducer.user.name !== prevProps.fetchReducer.user.name) {
      const { name, email, picture } = this.props.fetchReducer.user;
      this.setPriviousValue(name, email, picture)
    }
  }

  setPriviousValue = (name = '', email = '', picture = '') => {
    this.setState({ name, email, picture })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      name, email, picture, userId,
    } = this.state;

    const data = {
      name,
      email,
      picture,
      userId,
    }
    this.props.updateUser(data)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  fileSelectedHandler = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      this.setState({
        picture: reader.result,
      })
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  render() {
    const { name, email, picture } = this.state;

    return (
      <StyledGrid>
        <Header />
        <h1>Edit Profile</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Name:
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                className="form-control"
                value={name}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                className="form-control"
                value={email}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="file">
              Avatar:
              <img src={picture} alt={name} />
              <input
                type="file"
                name="file"
                onChange={this.fileSelectedHandler}
                className="form-control"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </StyledGrid>
    )
  }
}

export const mapStateToProps = state => ({
  fetchReducer: state.fetchReducer,
})

export default connect(mapStateToProps, { fetchUser, updateUser })(EditProfile)
