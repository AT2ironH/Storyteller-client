import React, { Component } from 'react'
import {Link} from "react-router-dom"

 class NavBottom extends Component {
    render() {
        return (
          <div className="nav-bottom">
            {
              this.props.user ? (
              <button className="btn btn-outline-dark btn-nav-bottom" onClick= {this.props.handleLogout} >logout</button>
            ) : (null)
            }
            
            {
              this.props.user ? (
              <button className="btn btn-outline-dark btn-nav-bottom">
              <Link nameClass="link" to="/user">profile</Link>
            </button>
            ) : (null)
            }
          </div>
        );
    }
}
export default NavBottom;
