import React, { Component } from 'react';



let sectionStyle = {
  width: "100%",
  height: "90vh",
  // backgroundImage: "url('/image/background_img.jpg')",
  backgroundImage: "url('/image/mountain_lake.jpg')",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};



class SignUp extends Component {
    render() {
        return (
          <div style={sectionStyle}>

            <div className="backdrop-auth">
              <h1>make an account</h1>
              <form onSubmit={this.props.onAdd}>
                  <div className="form-group">
                    <input name="name" className="auth-form form-control" type="text" placeholder="Enter name" />
                  </div>
                  <div className="form-group">
                    <input name="email" className="auth-form form-control" type="email" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <input name="password" className="auth-form form-control" type="password" placeholder="Enter password" />
                  </div>
                  <div className="form-group">
                    <button className=" btn-round " type="submit">go</button>
                  </div>
              </form>
            </div>

          </div>
        );
    }
}
export default SignUp;