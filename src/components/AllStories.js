import React, { Component } from 'react';
import Snuggle from 'react-snuggle';
import Map2 from './Map2';
import axios from 'axios';
import config from '../config';
import { Link, Redirect } from 'react-router-dom';
import LikeButton from './button_components/LikeButton'

// masonay doesn't work =========================================!!



class AllStories extends Component {

    // this.props = {
    //     stories: []
    // }

    render() {
        const {stories, user} = this.props
        // user verification
            if (!user) {
              return <Redirect to={"/login"} />;
            }
            
        return (
          <div>
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <Map2 stories={stories} />

                  <h1>all stories here</h1>
                  {stories.map((story) => {
                    return (
                      <div>
                        {/* <Snuggle> */}
                        {/* link doesn't seem to work when wrapping image only ====================== */}
                        <Link to={`/allstories/${story._id}`}>
                          <div key={story._id}></div>
                          <img
                            src={story.image}
                            alt="story image"
                            style={{ width: "340px" }}
                          />
                          <h4 className="title">{story.title}</h4>
                          <p className="description">{story.description}</p>
                          {/* how to link with the user name =======================================*/}
                          <p className="creator">{story.creator.email}</p>
                        </Link>

                        <div className="nav-container-card">
                          {/* like should be an image
                                                like button goes back to 0 after refresh
                                                how to take the like state to a single story page =================*/}
                          <LikeButton />
                        </div>

                        <div className="nav-container-card">
                          {/* how to connect review with the story ==============================*/}
                          <Link to={`/placeReview`}>place review</Link>
                        </div>
                      </div>
                    );
                    {
                      /* </Snuggle> */
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        );   
    
    }
}
    
    
export default AllStories;





