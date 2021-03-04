import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateStory from './components/CreateStory';
import { Switch, Route, withRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login"
import Signup from "./components/SignUp";
import axios from "axios"
import config from "./config";
import NavTop from './components/NavTop';



class App extends Component {
  state = {
    users: [],
  };

  //Signup
  handleSignup = (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    axios
      .post(`${config.API_URL}/api/signup`, {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        this.setState(
          {
            users: [response.data, ...this.state.users],
          },
          () => {
            this.props.history.push("/login");
          }
        );
      })
      .catch((err) => {
        console.log("Create failed", err);
      });
  };

  //Login
  handleLogin = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;

    axios.post(`${config.API_URL}/api/signin`, {   //which api url goes here? config is not defined?
        email: email,
        password: password,
      })
      .then((response) => {
        this.setState(
          {
            users: [response.data, ...this.state.users],
          },
          () => {
            this.props.history.push("/allstories");
          }
        );
      })
      .catch((err) => {
        console.log("Create failed", err);
      });
  };

  render() {
    return (
      <div>
      <NavTop />
      {/* <CreateStory /> */}
      
        <Switch>
          <Route exact path="/Homepage" component={Homepage} />
          <Route
            exact
            path="/signup"
            render={() => {
              return <Signup onAdd={this.handleSignup} />; //can we have onAdd in both signup and login cases.
            }}
          />
          <Route exact path="/login" render={() => {
              return <Login onAdd={this.handleLogin} />; //would onAdd work???
            }}
          />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
