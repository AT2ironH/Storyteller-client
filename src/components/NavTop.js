import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import '../public/image/logo_small.png'


 class NavTop extends Component {
    render() {
        return (
          <div className="nav-top">
            <Link to="/allstories"><img src="../image/SmallishLogo.png" alt="logo"  style={{ width: "150px ", position: "absolute", top: "15px", left: "15px"}}/></Link>
            <Link to="/allstories"></Link>
            {/* <img src="../public/image/logo_small.png" alt="logo"/> */}
            
          </div>
        );
    }
}
export default NavTop;