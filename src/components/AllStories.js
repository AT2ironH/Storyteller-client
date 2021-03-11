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
          <div className="stories-box">
          {/* <h1 className="stories-title">all amazing stories</h1> */}
            <div className="container-story">
              <div className="row">
                <div className="col-sm-3">
                  <Map2 nameClass="map-all"stories={stories} />
                  <h1 className="stories-title">all amazing stories</h1>

                  
                  {stories.map((story) => {
                    return (
                      <div className="story-card">
                        {/* <Snuggle> */}
                        {/* link doesn't seem to work when wrapping image only ====================== */}
                        <Link to={`/allstories/${story._id}`}>
                          <div key={story._id}></div>
                          <img
                            src={story.image}
                            alt="story image"
                            style={{ width: "340px" }}
                          />
                          <h4 className="title-story">{story.title}</h4>
                          <p className="description-story">{story.description}</p>
                          {/* how to link with the user name =======================================*/}
                          <p className="creator-story">{story.creator.email}</p>
                        </Link>

                        <div className="nav-container-card">
                          {/* like should be an image
                          like button goes back to 0 after refresh
                          how to take the like state to a single story page =================*/}
                            <LikeButton className="like-story" story={story}/>
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





