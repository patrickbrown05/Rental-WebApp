import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/card.css";
import "./css/main.css";
import "./css/uploadproduct.css";
import "./css/materialize.min.css";
import "./App.css";
import Signup from "./components/pages/Signup";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// import Profile from "./components/pages/Profile";
import FormContainer from "./components/FormContainer";
import NotFound from "./components/pages/NotFound";
import checkout from "./components/checkout";
import ProfileContainer from "./ProfileContainer"

// import ProductDetails from './components/ProductDetails';
import CardContainer from "./components/CardContainer";
import { Provider } from "./context";
import SignIn from "./components/pages/signIn";
import UploadComplete from "./components/pages/uploadcomplete";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={CardContainer} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={ProfileContainer} />
                <Route exact path="/uploadproduct" component={FormContainer} />
                <Route exact path="/signIn" component={SignIn} />
                <Route
                  exact
                  path="/uploadcomplete"
                  component={UploadComplete}
                />
                <Route exact path="/checkout" component={checkout} />
                <Route component={NotFound} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
