import React, { Component } from 'react'
import Map2 from "./Map2"
// import NavBottom from "./NavTop"
import { Link, Redirect } from "react-router-dom";
import LikeButton from "./button_components/LikeButton";


 class UserProfile extends Component {
   render() {
      // console.log(this.props.stories)

        const { stories, user } = this.props;
        if (!user) {
          return <Redirect to={"/login"} />;
        }

        return (
          <div>
          {/* top navbar */}
            <div className="nav-container-card">
              <button className="btn btn-outline-dark"><Link to="/edit">edit profile</Link></button>
            </div>

            {/* map & story container */}
            <div className="stories-box">
              <div className="container-story">
                <div className="row">
                  <div className="col-sm-3"></div>
              
                     <Map2 nameClass="map-all" stories={stories}/>
                     <h1 className="stories-title">your stories</h1>

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

                                {/* <p className="creator">{story.creator.email}</p> */}
                              </Link>

                              <div className="nav-container-card">
                                {/* like should be an image
                                  like button goes back to 0 after refresh
                                  how to take the like state to a single story page ================= */}
                                <LikeButton story={story}/>
                              </div>
                            </div>
                          );
                          {
                            /* </Snuggle> */
                          }
                        })}

                       
                          <button>
                            <Link to="/create">Create your story</Link>
                          </button>
                  </div>
                </div>
              </div>
            </div>

          
        );
    }
}
export default UserProfile;