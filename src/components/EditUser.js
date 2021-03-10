import React, { Component } from 'react'
import config from "../config";
import axios from "axios";
import { Redirect } from "react-router-dom";

class EditUser extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    axios
      .get(`${config.API_URL}/api/user/${this.props.user._id}`)
      .then((response) => {
        this.setState({
          user: response.data,                          
        });
      })
      .catch(() => {
        console.log("Detail fetch failed");
      });
  }

  handleNameChange = (event) => {
    let text = event.target.value;
    console.log(text);
    let cloneUser = JSON.parse(JSON.stringify(this.state.user));
    cloneUser.name = text;

    this.setState({
      user: cloneUser,
    });
  };

  handleEmailChange = (event) => {
    let email = event.target.value;
    let cloneUser = JSON.parse(JSON.stringify(this.state.user));
    cloneUser.email = email;

    this.setState({
      user: cloneUser,
    });
  };

//   handlePasswordChange = (event) => {
//     let password = event.target.value;
//     let clonePassword = JSON.parse(JSON.stringify(this.state.user));
//     clonePassword.password = password;

//     this.setState({
//       password: clonePassword,
//     });
//   };

  render() {
      const { user } = this.state;
      //if you are not logedin you will be redirected to login page.
       if (!user) {
         return <Redirect to={"/login"} />;
       }
    return (
      <div>
        
          <input name="name" onChange={this.handleNameChange} value={user.name} type="text" placeholder="Enter name" />
          <input name="email" onChange={this.handleEmailChange} value={user.email} type="email" placeholder="Enter email" />
          {/* <input name="password" onChange={this.handlePasswordChange} value={user.password} type="password" placeholder="Enter password" /> */}
          <button onClick={ () => { this.props.onEdit(user) } } className="btn btn-outline-dark" >
            Edit profile
          </button>
        
      </div>
    );
  }
}

export default EditUser;