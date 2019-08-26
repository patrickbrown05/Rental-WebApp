import React, { Component } from 'react';
import { Consumer } from '../../context';
import axios from 'axios';
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      newUser: {
        username: '1',
        password: '1',
        first_name: '1',
        last_name: '1',
        email: '1',
        phone_num: '6671231231',
        address: '777 bluehack ln',
        city: 'bradenton',
        state: 'fl',
        country: 'us',
        postalcode: '11111',
        profile_pic: 'img/img.jpg'
      }
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handleFirstname = this.handleFirstname.bind(this);
    this.handleLastname = this.handleLastname.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    // this.handlePassword2 = this.handlePassword2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          username: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }
  handleFirstname(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          first_name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }
  handleLastname(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          last_name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }
  handleEmail(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          email: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }
  handlePassword(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          password: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }
  // handlePassword2(e) {
  //   let value = e.target.value;
  //   this.setState(
  //     prevState => ({
  //       newUser: {
  //         ...prevState.newUser,
  //         password2: value
  //       }
  //     }),
  //     () => console.log(this.state.newUser)
  //   );
  // }

  handleSubmit(e) {
    e.preventDefault();

    let userData = this.state.newUser;

    console.log(JSON.stringify(userData));
    console.log(this.state.user);

    fetch('http://localhost:3001/users', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }).then(response => {
      response.json().then(data => {
        console.log('Successful' + data);
      });
    });

    this.props.history.push('/SignIn');
  }

  render() {
    return (
      <div>
        <section className="section section-signup">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <h4>Sign up to unlock these features!</h4>
                <p>
                  <i className="material-icons">announcement</i>Post listings
                </p>
                <p>
                  <i className="material-icons">assignment_ind</i>View your
                  profile
                </p>
                <p>
                  <i className="material-icons">assessment</i>Vote user ratings!
                </p>
              </div>
              <div className="col s12 m6">
                <div className="card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
                  <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                      <label className="Form_Label" htmlFor="user_name">
                        User Name
                      </label>
                      <br />
                      <input
                        type="text"
                        id="user_name"
                        placeholder="Enter Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleUsername}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="first_name">First Name</label>
                      <br />
                      <input
                        type="text"
                        id="first_name"
                        placeholder="Enter First Name"
                        name="first_name"
                        value={this.state.first_name}
                        onChange={this.handleFirstname}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="last_name">Last Name</label>
                      <br />
                      <input
                        type="text"
                        id="last_name"
                        placeholder="Enter Last Name"
                        name="last_name"
                        value={this.state.last_name}
                        onChange={this.handleLastname}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="email">Email</label>
                      <br />
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleEmail}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="password">Password</label>
                      <br />
                      <input
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        name="password"
                        minLength="5"
                        value={this.state.password}
                        onChange={this.handlePassword}
                      />
                    </div>
                    {/* <div className="input-field">
                      <label htmlFor="password">Re-enter Password</label>
                      <br />
                      <input
                        type="password"
                        id="password2"
                        placeholder="Enter Your Password Again"
                        name="password2"
                        minLength="5"
                        value={this.state.password2}
                        // onChange={this.handlePassword2}
                      />
                    </div> */}
                    <input
                      type="submit"
                      defaultValue="Signup"
                      className="btn btn-large purple btn-extend"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Signup;
