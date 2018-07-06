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

  render() {
    const { name, email, picture } = this.state;

    return (
      <StyledGrid>
        <h1>Edit Profile</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" onChange={this.handleChange} value={name} />
          <label>Email:</label>
          <input type="email" name="email" onChange={this.handleChange} value={email} />
          <input type="submit" value="Submit" />
        </form>
      </StyledGrid>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.userReducer.payload,
})

export default connect(mapStateToProps, { saveUser })(EditProfile)
