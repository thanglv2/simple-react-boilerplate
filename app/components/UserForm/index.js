import * as React from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchUser } from '../ViewProfile/action'
import { updateUser } from './action'

const StyledSubmitBtn = styled(Button)`
  display: block;
  margin: auto;
`

const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
`
const StyledDiv = styled.div`
  display: flex;
`
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

export class UserForm extends React.Component<Props> {
  static defaultProps = {
    userInfo: {
      user: {},
    },
  }

  state = {
    name: this.props.fetchReducer.user.name || '',
    email: this.props.fetchReducer.user.email || '',
    picture: this.props.fetchReducer.user.picture || '',
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

  setPriviousValue = (name, email, picture) => {
    this.setState({ name, email, picture })
  }

  validate = () => {
    const errors = {};
    const { name, email } = this.state;
    if (!name) {
      errors.name = 'Required'
    } else if (name.length < 7) {
      errors.name = 'Must be 7 characters at least'
    }
    if (!email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address'
    }

    return errors;
  }

  createNotification = () => NotificationManager.success('Update successfully', 'Edit Profile')

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
    if (Object.keys(this.validate()).length === 0) {
      this.props.updateUser(data)
      this.createNotification();
    }
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
    const {
      name, email, picture,
    } = this.state;

    return (
      <StyledRow>
        <Col sm={9} md={9} xs={9}>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name:</Label>
              <Input
                type="text"
                name="name"
                onChange={this.handleChange}
                className="form-control"
                value={name}
              />
            </FormGroup>
            { this.validate().name && <Alert color="warning">{this.validate().name}</Alert> }
            <FormGroup>
              <Label htmlFor="email">Email:</Label>
              <Input
                type="email"
                name="email"
                onChange={this.handleChange}
                className="form-control"
                value={email}
              />
            </FormGroup>
            { this.validate().email && <Alert color="warning">{this.validate().email}</Alert> }
            <FormGroup>
              <Label htmlFor="file">Avatar:</Label>
              <StyledDiv>
                <img src={picture} alt={name} className="img-fluid" />
                <Input
                  type="file"
                  name="file"
                  onChange={this.fileSelectedHandler}
                  className="form-control"
                />
              </StyledDiv>
            </FormGroup>
            <StyledSubmitBtn type="submit" className="btn btn-primary">Submit</StyledSubmitBtn>
          </Form>
          <NotificationContainer />
        </Col>
      </StyledRow>
    )
  }
}

export const mapStateToProps = state => ({
  fetchReducer: state.fetchReducer,
})

export default connect(mapStateToProps, { fetchUser, updateUser })(UserForm)
