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
                Let this app be your hub for sharing backpacking adventures and cool places you visited.
                Tell us your story!
                </p>

                <div className="btn-box-home">
                  <div className="btn-home-page-box">
                    <button className="btn-home btn btn-outline-dark">
                      <Link className="btn-home" to="/login">Login</Link>
                    </button>
                </div>
                </div>
                
                <div className="btn-box-home">
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