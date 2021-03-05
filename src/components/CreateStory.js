import React, { Component } from 'react';
import Snuggle from 'react-snuggle';
import Map from './Map';
import axios from 'axios';
import config from '../config'


 class CreateStory extends Component {
   state = {
     story: {},
     inputLocation: "Taganga",
     lat: 11.267489,
     lon: -74.191023,
     //    stories: [],
     //    loggedInUser: null,
     //    error: null,
   };

   handleChange = (event) => {
       this.setState({
         inputLocation: event.target.value,
       });
     // make the api call here
     axios.get(`${config.GEO_URL}${event.target.value}`)
     .then((response) => {
        console.log(response.data.data[0])
        let aresponse = response.data.data[0];
        this.setState({
          lat: aresponse.latitude,
          lon: aresponse.longitude,
        });
     })
     .catch((err)=> {
        console.log("sth went wrong")
     })
     // once api is successful
     
   };

   render() {
     return (
       // <Snuggle>
       <div className="card-story">
         <Map lon={this.state.lon} lat={this.state.lat} inputLocation={this.state.inputLocation} />

         <form onSubmit={this.props.onAdd}>
           <input
             onChange={this.handleChange}
             name="location"
             value={this.state.inputLocation}
             type="text"
             placeholder="Tell where it is.."
           />
           <br />
           <input name="image" type="file" cols="35" />
           <br />
           <input
             name="title"
             type="text"
             placeholder="Tell the title of your story.."
           />
           <br />
           <textarea
             id="tellStory"
             name="description"
             placeholder="Tell your story...."
             rows="8"
             cols="35"
           ></textarea>
           <br />

           <input
             name="btn-public"
             type="checkbox"
             className="btn-hide-show"
             data-type="simple-switch"
           />

           <button name="btn-submit" type="submit">
             pin
           </button>
         </form>
       </div>

       //  </Snuggle>

       //  {/* <Route path="/create" render={() => {
       //         return <CreateStory onAdd={this.handleSubmit} />
       //     }} /> */}
     );
   }
 }

export default CreateStory;

 