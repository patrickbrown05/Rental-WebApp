import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../productupload/TextInputGroup';
import axios from 'axios';

class SignIn extends Component {
  state = {
    uname: '',
    password: '',
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { uname, password } = this.state;

    // Check For Errors
    if (uname === '') {
      this.setState({ errors: { uname: 'Name is required' } });
      return;
    }

    if (password === '') {
      this.setState({ errors: { password: 'Password is required' } });
      return;
    }

    const newContact = {
      uname,
      password
    };

    // const res = await axios.post(
    //   'http://localhost:3001/users/login',
    //   newContact
    // );
    fetch("http://localhost:3001/users/login", {
      method: "POST",
      body: JSON.stringify(newContact),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
        dispatch({ type: "LOGIN", payload: data });
      });

      
      console.log('res.data' + JSON.stringify(response.data));
    });

    // dispatch({ type: 'LOGIN', payload: res.data });
    // console.log('res.data' + JSON.stringify(res.data));

    // Clear State
    this.setState({
      uname: '',
      password: '',
      errors: {}
    });

    this.props.history.push('/profile');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    {
      console.log(this.props);
    }
    const { uname, password, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              {/* <div className="card-header">Log in</div> */}
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="uname"
                    placeholder="Enter username"
                    value={uname}
                    onChange={this.onChange}
                    error={errors.uname}
                  />
                  <TextInputGroup
                    label="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={this.onChange}
                    error={errors.password}
                  />
                  <input
                    type="submit"
                    value="Log in"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SignIn;
