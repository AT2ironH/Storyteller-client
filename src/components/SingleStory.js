import React, { Component } from 'react';
import Snuggle from 'react-snuggle';
import Map from './Map';
import axios from 'axios';
import config from '../config';
import { Link } from 'react-router-dom';
import LikeButton from './button_components/LikeButton'


 class SingleStory extends Component {

    state = {
        story: {},
    }

    componentDidMount() {
        let storyId = this.props.match.params.storyId

        axios.get(`${config.API_URL}/api/allstories/${storyId}`)
        .then((response) => {
          this.setState({ story: response.data })
        })
        .catch((error) => {
            console.log('Story fetch failed')
        })
      }

      render() {
       const {story} = this.state
            return (
                <div className="container"> 
                  <div className="row">
                    <div className="col-sm-3">
                        
                        <Snuggle>
                            <img src={story.image} alt="story image" style={{ width: "340px"}} />
                            <h1 className="title">{story.title}</h1>
                            <p className="description">{story.description}</p>
                            {/* how to link with the user name =======================================*/}
                            <p className="creator">{story.creator}</p>

                            <div className="nav-container-story">
                                <div className="nav-story">
                                    {/* like should be an image
                                    like button goes back to 0 after refresh
                                    how to take the like state to a single story page =================*/}
                                    <LikeButton />
                                </div>

                                <div className="nav-story">
                                    {/* how to connect review with the story ==============================*/}
                                    <Link to={`/placeReview`}>place review</Link> 
                                </div>
                            </div>

                            {/* <Map /> */}
                        </Snuggle>
                          
                    </div>
                 </div>
              </div>  
   
            )
        }  

}  
   
export default SingleStory;