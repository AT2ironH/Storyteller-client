import React, { Component } from 'react'
import {Link} from "react-router-dom"

 class Homepage extends Component {
    render() {
        return (
          <div>
            <h1>Welcome backpackers</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
            <button className="btn btn-outline-dark">
              <Link to="/login">Login</Link>
            </button>
            <button className="btn btn-outline-dark">
              <Link to="/signup">Sign up</Link>
            </button>
          </div>
        );
    }
}
export default Homepage;