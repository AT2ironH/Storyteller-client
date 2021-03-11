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
            <div className="nav-container">
              <button className="btn btn-outline-dark btn-edit"><Link className="edit-nav-btn" to="/edit"><p className="edit-btn" > edit profile</p></Link></button>
            </div>

            {/* map & story container */}
            <div className="stories-box">
              <div className="container-story container-user-stories">
                <div className="row">
                  <div className="col-sm-3 user-story-card">
              
                     <Map2 nameClass="map-all" stories={stories}/>
                     {/* <h1 className="stories-title">your stories</h1> */}

                     <div className="container-create">
                          <button className=" btn-create" ><Link  className="create-link-btn" to="/create">make another story</Link></button>
                      </div>

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
          </div>

          
        );
    }
}
export default UserProfile;