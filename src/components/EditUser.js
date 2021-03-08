import React, { Component } from 'react'

class EditUser extends Component {
    render() {
        return (
            <div>
                <form > 
              <input name="name" type="text" placeholder="Enter name" />
              <input name="email" type="email" placeholder="Enter email" />
              <input name="password" type="password" placeholder="Enter password" />
              <button className="btn btn-outline-dark" type="submit">Edit profile</button>
            </form>
            </div>
        )
    }
}

export default EditUser;