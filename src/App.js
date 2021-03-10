import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateStory from './components/CreateStory';
import { Switch, Route, withRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login"
import Signup from "./components/SignUp";
import axios from "axios"
import config from "./config";
import NavTop from "./components/NavTop";
import UserProfile from "./components/UserProfile"
// import LogOut from "./components/LogOut"
import NavBottom from "./components/NavBottom"
import AllStories from "./components/AllStories";
import SingleStory from "./components/SingleStory";
// import CreateReview from "./components/CreateReview";
import EditUser from "./components/EditUser";
import NotFound from "./components/NotFound";


class App extends Component {
  state = {
    user: null,
    stories: [],
    story: {},
    // ready: false,
    // review: {}
    fetching: false,
  };

  //Signup
  handleSignup = (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    axios
      .post(
        `${config.API_URL}/api/signup`,
        {
          name: name,
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        this.setState(
          {
            user: response.data,
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

    axios
      .post(
        `${config.API_URL}/api/signin`,
        {
          //which api url goes here? config is not defined?
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        this.setState(
          {
            user: response.data,
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
  handleSubmit = (event, lon, lat) => {
    event.preventDefault();
    let location = {};
    location.lon = lon;
    location.lat = lat;
    let image = event.target.image.files[0];
    let title = event.target.title.value;
    let description = event.target.description.value;
    // let public = event.target.public.value

    let uploadForm = new FormData();
    uploadForm.append("imageUrl", image);

    // send image to cloudinary
    axios
      .post(`${config.API_URL}/api/upload`, uploadForm, {
        withCredentials: true,
      })

      .then((response) => {
        // make an API call to the server side route to create a new story
        axios
          .post(
            `${config.API_URL}/api/create`,
            {
              location: location,
              image: response.data.image,
              title: title,
              description: description,
              // public: public,
              completed: false,
            },
            { withCredentials: true }
          )

          .then((response) => {
            // when the server has created a story
            // update the state that is visible to the user
            this.setState(
              {
                stories: [response.data, ...this.state.stories],
              },
              () => {
                // when story is created lead user to his page
                this.props.history.push("/user");
              }
            );
          })
          .catch((error) => {
            console.log("Creating story failed", error);
          });
      });
  };
  //LOGOUT
  handleLogout = () => {
    axios
      .post(`${config.API_URL}/api/logout`, {}, { withCredentials: true })
      .then(() => {
        this.setState(
          {
            user: null,
          },
          () => {
            this.props.history.push("/login");
          }
        );
      });
  };


//EDIT USER
  handleEdit = (user) => {
    axios
      .patch(`${config.API_URL}/api/user/${user._id}`, {
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        console.log(res.data)
        this.getAllStories()
        this.setState(
          {
            user: res.data,
          },
          () => {
            this.props.history.push("/user");
          }
        );
      })
      .catch((err) => {
        console.log("Edit failed", err);
      });
  };

  // get all stories  // also for load screen
  componentDidMount() {
    axios
      .get(`${config.API_URL}/api/user`, { withCredentials: true })
      .then((res) => {
        this.setState({ user: res.data, fetching: true });
      })
      .catch(() => {
        console.log("sth wrong");
        this.setState({ fetching: true });
      });

    this.getAllStories()
  }

  getAllStories = () => {
    axios
      .get(`${config.API_URL}/api/allstories`)

      .then((response) => {
        console.log(response.data);
        this.setState({ stories: response.data });
      })

      .catch(() => {
        console.log("Fetching all stories failed");
      });
  }
  // create review
  //   handleSubmitReview = (event) => {
  //     event.preventDefault()
  //     let review = event.target.review.value;

  //     // make an API call to the server side Route to create a review
  //     axios.post(`${config.API_URL}/api/placeReview`, {
  //       review: review,
  //       completed: false

  //   }, {withCredentials: true})

  //   .then((response) => {
  //     // when server has created this new review, update your state that is visible to the user
  //     this.setState({
  //       reviews: [response.data, ...this.state.reviews],
  //       completed: false,
  //     }, () => {
  //       // after updating state, go to update stories page
  //       this.props.history.push("/allstories")
  //     })

  //   })
  //   .catch((err) => {
  //     console.log('Failed create review', err)
  //   })

  //   .catch(() => {

  //   })
  // }

  render() {
    const { stories, user } = this.state;
    const { review } = this.state;
    if (!this.state.fetching) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <NavTop />

        <Switch>
          {/* <Route exact path="/Homepage" component={Homepage} /> */}
          <Route
            exact
            path="/Homepage"
            render={() => {
              return <Homepage user={user} />;
            }}
          />
          <Route
            exact
            path="/signup"
            render={() => {
              return <Signup onAdd={this.handleSignup} />; //can we have onAdd in both signup and login cases.
            }}
          />
          <Route
            exact
            path="/login"
            render={() => {
              return <Login onAdd={this.handleLogin} />; //would onAdd work???
            }}
          />
          <Route
            path="/create"
            render={() => {
              return <CreateStory user={user} onAdd={this.handleSubmit} />;
            }}
          />
          <Route
            exact
            path="/user"
            render={() => {
              return <UserProfile stories={stories} user={user} />;
            }}
          />
          <Route
            exact
            path="/user/:singleStory"
            render={(userProps) => {
              // return <UserProfile {...userProps} />
              return <UserProfile story={story} user={user} />;
            }}
          />{" "}
          {/*adjust the profile link to be a dinamic one and it shows a specific logged in user*/}
          <Route
            exact
            path="/allstories/:storyId"
            render={(routeProps) => {
              return (
                <SingleStory {...routeProps} stories={stories} user={user} />
              );
            }}
          />
          <Route
            exact
            path="/allstories"
            render={() => {
              return <AllStories stories={stories} user={user} />;
            }}
          />
          <Route
            path="/placeReview"
            render={(routeProps) => {
              return <CreateReview onAdd={this.handleSubmitReview} />;
            }}
          />
          <Route
            exact
            path="/edit"
            render={(routeProps) => {
              //not sure about this route...
              return (
                <EditUser
                  user={user}
                  onEdit={this.handleEdit}
                  {...routeProps}
                />
              );
            }}
          />
          <Route path="" component={NotFound} />
        </Switch>
        <NavBottom user={user} handleLogout={this.handleLogout} />
      </div>
    );
  }
}
export default withRouter(App);
