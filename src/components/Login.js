import React, { Component } from 'react'
import "../App.css"

 class Login extends Component {
    render() {
        return (
          <div>
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <h1>Welcome back</h1>
                  <form onSubmit={this.props.onAdd}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                      />
                    </div>
                    <button className="btn btn-outline-dark" type="submit">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default Login;