import React, { Component } from 'react'
// like should be an image ===========================================!!
// like button goes back to 0 after refresh ==========================!!
// how to take the like state to a single story page =================!!
import axios from 'axios'
import config from '../../config'
                                                
                                                

class LikeButton extends Component {

    state = {
        number: 0,
        
    }

    componentDidMount() {
      this.setState({number: this.props.story.like.length})
    }

    // handle click event when button is clicked
    handleClick = () => {
      axios.patch(`${config.API_URL}/api/allstories/like/${this.props.story._id}`, {}, { withCredentials: true })
        .then((response) => {
          this.setState({number: response.data.like.length})

        })

        .catch(() => {

        })

        // console.log('button works')
        // this.setState({
        //     number: this.state.number + 1
        // }), () => {
        //     // you will always get the updated value
        //     console.log(this.state.number)
        // }
    }

    render() {
        console.log(this.props.story)
        return (
          <button
            className="btn btn-outline-dark"
            className="like-img-btn"
            onClick={this.handleClick}
          >
            like {this.state.number}
          </button>
        );
    }
}

export default LikeButton;
