import React, { Component } from 'react'

 class Login extends Component {
    render() {
        return (
          <div>
            <form onSubmit={this.props.onAdd}>
              <input name="email" type="email" placeholder="Enter email" />
              <input name="password" type="password" placeholder="Enter password" />
              <button type="submit">Signup</button>
            </form>
          </div>
        );
    }
}
export default Login;