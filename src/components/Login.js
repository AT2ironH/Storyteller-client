import React, { Component } from 'react'
//import "../App.css"

let sectionStyle = {
  width: "100%",
  height: "90vh",
  backgroundImage: "url('/image/mountain_lake.jpg')",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

 class Login extends Component {
    render() {
        return (
          <div style={sectionStyle}> 
            <div className="backdrop-auth">
              <h1>welcome back</h1>
          
                <div className="container">
                  <div className="row">
                    <div className="col-sm-3">
                    
                    <form onSubmit={this.props.onAdd}>
                      <div className="form-group">
                        <input
                          className="auth-form form-control"
                          name="email"
                          type="email"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="auth-form form-control"
                          name="password"
                          type="password"
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="form-group">
                        <button className=" btn-round " type="submit">go</button>
                      </div>
                  </form>

                </div>
               </div>
              </div>
            </div>
          </div>
        );
    }
}
export default Login;