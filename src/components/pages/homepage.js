import React from "react";
import CardContainer from "../CardContainer";
class Homepage extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="home" class="scrollspy">
          <div className="navbar-fixed">
            <nav className="teal">
              <div className="container">
                <div className="nav-wrapper">
                  <a href="#home" className="brand-logo">
                    WhyBuy
                  </a>
                  <a
                    href="#"
                    data-activates="mobile-nav"
                    className="button-collapse"
                  >
                    <i className="material-icons">menu</i>
                  </a>
                  <ul className="right hide-on-med-and-down">
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="./profile.html">Profile</a>
                    </li>
                    <li>
                      <a id="myBtn">Login</a>
                    </li>
                    <li>
                      <a href>
                        <i className="material-icons">shopping_cart</i>
                      </a>
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
          {/*============Login============*/}
          {/* The Modal */}
          <div id="myModal" className="modal">
            {/* Modal content */}
            <div className="modal-content">
              <div className="close">
                <button className="exit btn">close</button>
              </div>
              {/* <div class="container"> */}
              <form action="/action_page.php">
                <div className="row">
                  <h4 style={{ textAlign: "center" }}>
                    Login with Social Media or Manually
                  </h4>
                  <div>{/* <span class="vl innertext">or</span> */}</div>
                  <div className="col offset-l1 l4">
                    <br />
                    <a href="#" className="fb btn">
                      <i className="fab fa-facebook-f" /> Login with Facebook
                    </a>
                    <a href="#" className="twitter btn">
                      <i className="fab fa-twitter" /> Login with Twitter
                    </a>
                    <a href="#" className="google btn">
                      <i className="fab fa-google" /> Login with Google+
                    </a>
                  </div>
                  <div className="col">
                    <div className="hide-md-lg">
                      <p>Or sign in manually:</p>
                    </div>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      required
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <input type="submit" defaultValue="Login" />
                  </div>
                </div>
                <div className="bottom-container">
                  <div className="row">
                    <div className="col s5 m5 l5 offset-l1">
                      <a href="#" style={{ color: "white" }} className="btn">
                        Sign up
                      </a>
                    </div>
                    <div className="col s5 m5 l5 offset-m2">
                      <a href="#" style={{ color: "white" }} className="btn">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                </div>
              </form>
              {/* </div> */}
            </div>
          </div>
          {/*============End Login============*/}
          {/* Section: Popular */}
          <section id="popular" className="section section-popular scrollspy">
            <div className="container">
              <div className="row">
                <div id="modal1" className="modal">
                  <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                  </div>
                  <div className="modal-footer">
                    <a
                      href="#!"
                      className="modal-close waves-effect waves-green btn-flat"
                    >
                      Agree
                    </a>
                  </div>
                </div>
                <CardContainer />
              </div>
            </div>
          </section>
          {/* Footer */}
          <footer className="section teal darken-2 white-text center">
            <p className="flow-text">WhyBuy © 2018</p>
          </footer>
          {/*Import jQuery before materialize.js*/}
          {/* Load React. */}
          {/* Note: when deploying, replace "development.js" with "production.min.js". */}
          {/* Load Babel Compiler */}
          {/*  */}
          {/* Load our React component. */}
          {/*  */}
          {/* type="text/babel" */}
        </div>
      </div>
    );
  }
}

export default Homepage;
