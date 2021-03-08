import React, { Component } from 'react'
import {Link} from "react-router-dom"

 class NavBottom extends Component {
    render() {
        return (
          <div>
            {
              this.props.user ? (
              <button className="btn btn-outline-dark" onClick= {this.props.handleLogout} >logout</button>
            ) : (null)
            }
            
            {
              this.props.user ? (
              <button className="btn btn-outline-dark">
              <Link to="/user">profile</Link>
            </button>
            ) : (null)
            }
          </div>
        );
    }
}
export default NavBottom;
