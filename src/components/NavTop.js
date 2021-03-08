import React, { Component } from 'react'
import { Link } from "react-router-dom";


 class NavTop extends Component {
    render() {
        return (
          <div className="nav-container-card">
            <Link to="/allstories">Logo</Link>
          </div>
        );
    }
}
export default NavTop;