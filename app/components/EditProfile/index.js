import * as React from 'react';
import { StyledGrid } from '../../../utils/commonStyle'
import axios from 'axios'
import { connect } from 'react-redux'
import { saveUser } from '../../containers/Login/action'

type Props = {
  saveUser: () => void,
  picture: string,
  name: string,
  email: string,
  userInfo: Object,
}

class EditProfile extends React.Component<Props> {
  static defaultProps = {
    userInfo: {
      name: '',
      email: '',
      picture: '',
    },
  }

  state = {
    name: this.props.userInfo ? this.props.userInfo.name : '',
    email: this.props.userInfo ? this.props.userInfo.email : '',
    picture: this.props.userInfo ? this.props.userInfo.picture : '',
  }

  componentDidMount() {
    if (this.props.userInfo === EditProfile.defaultProps.userInfo) {
      axios.get('http://localhost:3000/users')
        .then(({ data }) => {
          const { name, email, picture } = data[0];
          const payload = {
            name,
            email,
            picture,
          }

          this.props.saveUser(payload)
          this.setState({
            name,
            email,
            picture,
          })
        })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, picture } = this.state;
    const payload = {
      name,
      email,
      picture,
    }

    this.props.saveUser(payload)
    axios.get('http://localhost:3000/users').then(({ data }) => {
      axios.put(`http://localhost:3000/users/${data[0].id}`, {
        name,
        picture,
        email,
      })
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
        <h1>Edit Profile</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Name:
              <input type="text" name="name" onChange={this.handleChange} value={name} className="form-control" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email:
              <input type="email" name="email" onChange={this.handleChange} value={email} className="form-control" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="file">
              Avatar:
              <img src={picture} alt={name} />
              <input type="file" name="file" onChange={this.fileSelectedHandler} className="form-control" />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </StyledGrid>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.userReducer.payload,
})

export default connect(mapStateToProps, { saveUser })(EditProfile)
