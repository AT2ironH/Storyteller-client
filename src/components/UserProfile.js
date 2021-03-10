import React, { Component } from 'react'
import Map2 from "./Map2"
// import NavBottom from "./NavTop"
import { Link, Redirect } from "react-router-dom";
import LikeButton from "./button_components/LikeButton";


 class UserProfile extends Component {
   render() {
      console.log(this.props.stories)

        const { stories, user } = this.props;
        if (!user) {
          return <Redirect to={"/login"} />;
        }
        return (
          <div>
            <div className="nav-container-card">
              <button className="btn btn-outline-dark">
                <Link to="/edit">edit profile</Link>
              </button>
            </div>
            <Map2 stories={stories}/>

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
                    {/* <LikeButton story={story}/> */}
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
            <button>
              <Link to="/create">Create your story</Link>
            </button>
          </div>
        );
    }
}
export default UserProfile;