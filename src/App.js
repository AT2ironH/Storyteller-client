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
    stories: []
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
      }, {withCredentials: true})
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
      
      }, {withCredentials: true})
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

  // create story
  handleSubmit =(event) => {
    event.preventDefault() 
        let location = event.target.location.value
        let image = event.target.image.files[0]
        let title = event.target.title.value
        let description = event.target.description.value
        // let public = event.target.public.value
        
    

    let uploadForm = new FormData()
    uploadForm.append('imageUrl', image)

    // send image to cloudinary
    axios.post(`${config.API_URL}/api/upload`, uploadForm, {withCredentials: true})
        
    .then((response) => {
        // make an API call to the server side route to create a new story
        axios.post(`${config.API_URL}/api/create`, {

            location: location,
            image: response.data.image,
            title: title,
            description: description,
            // public: public,
            completed: false

        }, {withCredentials: true})

    .then((response) => {
        // when the server has created a story
        // update the state that is visible to the user
        this.setState({
            stories: [response.data, ...this.state.stories]
        }, () => {
        // when story is created lead user to his page
            this.props.history.push('/api/user/:userId')
        })
    })
    .catch((error) => {
        console.log("Creating story failed", error)
    })        

    })

}

  render() {
    return (
      <div>
      <NavTop />
      
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

         <Route path="/create" render={() => {
                return <CreateStory onAdd={this.handleSubmit} />
            }} /> 


          
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
