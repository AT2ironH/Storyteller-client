import React, { Component } from 'react'
import {Link} from "react-router-dom"

 class NavBottom extends Component {
    render() {
        return (
          <div>
            <button>
              <Link to="/savedstories">Liked stories</Link>
            </button>
            <button>
              <Link to="/userprofile">profile</Link>
            </button>
            {/* <button>
              <Link to="/login">logout</Link>
            </button> */}
          </div>
        );
    }
}
export default NavBottom;


// import React from "react";

// function MyNav(props) {
//   return (
//     <div>
//           {props.user ? (<button onClick={props.onLogout}>Logout</button>) : null}
           
//     </div>

// export default NavBottom;