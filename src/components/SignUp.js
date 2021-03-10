import React, { Component } from 'react';
import "./SignUp.css";

let sectionStyle = {
  width: "100%",
  height: "90vh",
  backgroundImage: "url('/image/background_img.jpg')",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};



class SignUp extends Component {
    render() {
        return (
          <div style={sectionStyle}>

            <h1>Hello</h1>
       
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