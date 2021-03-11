import React, { Component } from 'react'
import {Link} from "react-router-dom"

let sectionStyle = {
  width: "100%",
  height: "94vh",
  backgroundImage: "url('/image/background_img.jpg')",
  // backgroundImage: "url('/image/mountain_lake.jpg')",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

 class Homepage extends Component {
    render() {
        return (
          <div style={sectionStyle}> 
            <div className="backdrop-auth">
              <h1 className="welcome">welcome<br></br>backpackers</h1>
  
                <p className="welcome-intro">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate
                </p>

                <div className="btn-home-page-box">
                  <button className="btn-home btn btn-outline-dark">
                    <Link className="btn-home" to="/login">Login</Link>
                  </button>
                
                  <button className="btn-home btn btn-outline-dark">
                    <Link className="btn-home" to="/signup">Sign up</Link>
                  </button>
                </div>
                
            </div>
         </div>
        );
    }
}
export default Homepage;