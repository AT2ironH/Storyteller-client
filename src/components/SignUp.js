import React, { Component } from 'react'

class SignUp extends Component {
    render() {
        return (
          <div>
            <form onSubmit={this.props.onAdd}>
              <input name="name" type="text" placeholder="Enter name" />
              <input name="email" type="email" placeholder="Enter email" />
              <input name="password" type="password" placeholder="Enter password" />
              <button className="btn btn-outline-dark" type="submit">Signup</button>
            </form>
          </div>
        );
    }
}
export default SignUp;