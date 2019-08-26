import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { username } = this.props;

          return (
            <div className="App">
              <div id="home" className="scrollspy">
                <div className="navbar-fixed">
                  <nav className="teal">
                    <div className="container">
                      <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">
                          WhyBuy
                        </Link>
                        <a
                          href="#"
                          data-activates="mobile-nav"
                          className="button-collapse"
                        >
                          <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/signup">Signup</Link>
                          </li>
                          <li>
                            <Link to="/profile">Profile</Link>
                          </li>
                          <li>
                            <Link to="/signIn">Sign in</Link>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
                <ul className="side-nav" id="mobile-nav">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="./profile.html">Profile</a>
                  </li>
                  <li>
                    <a onclick="document.getElementById('id01').style.display='block'">
                      Login
                    </a>
                  </li>
                  <li>
                    <a href>
                      <i className="material-icons">shopping_cart</i>
                    </a>
                  </li>
                </ul>
                {/* Section: Search */}
                <section
                  id="search"
                  className="section section-search teal darken-1 white-text center scrollspy"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col s4 m4 l4">
                        <h4>Search Categories</h4>
                      </div>
                      <div className="input-field col s7 m7 l7">
                        <input
                          className="white grey-text autocomplete"
                          placeholder="Electronics, Tools, etc..."
                          type="text"
                          id="autocomplete-input"
                        />
                      </div>
                    </div>
                    {/* Section: Categories */}
                    <div className="nav-extended">
                      <div className="nav-wrapper">
                        <div className="nav-content">
                          <ul className="tabs tabs-transparent">
                            <li className="tab">
                              <a href="#test1">Household</a>
                            </li>
                            <li className="tab">
                              <a className="active" href="#test2">
                                Tools
                              </a>
                            </li>
                            <li className="tab">
                              <a href="#test3">Sports</a>
                            </li>
                            <li className="tab">
                              <a href="#test4">Leisure</a>
                            </li>
                            <li className="tab">
                              <a href="#test4">Equipment</a>
                            </li>
                            <li className="tab">
                              <a href="#test4">Electronics</a>
                            </li>
                            <li className="tab">
                              <a href="#test4">Furniture</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          );
        }}
  


// Header.defaultProps = {
//   username: 'Login'
// };

// Header.propTypes = {
//   username: PropTypes.string.isRequired
// };

export default Header;
