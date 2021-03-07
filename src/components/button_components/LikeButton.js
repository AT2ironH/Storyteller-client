import React, { Component } from 'react'
// like should be an image ===========================================!!
// like button goes back to 0 after refresh ==========================!!
// how to take the like state to a single story page =================!!
                                                
                                                

class LikeButton extends Component {

    state = {
        number: 0
    }

    // handle click event when button is clicked
    handleClick = () => {
        console.log('button works')
        this.setState({
            number: this.state.number + 1
        }), () => {
            // you will always get the updated value
            console.log(this.state.number)
        }
    }

    render() {
        
        return (
            <button className="like-img-btn" onClick={this.handleClick} >
            like {this.state.number} 
            </button>       
        )
    }
}

export default LikeButton;
