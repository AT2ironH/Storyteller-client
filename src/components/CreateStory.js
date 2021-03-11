import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Snuggle from 'react-snuggle';
import Map from './Map';
import axios from 'axios';
import config from '../config';
import { Link, Redirect } from "react-router-dom";

let sectionStyle = {
  width: "100%",
  height: "90vh",
  backgroundImage: "url('/image/black.png')",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};



 class CreateStory extends Component {
   state = {
     story: {},
     inputLocation: "Taganga",
     lat: 11.267489,
     lon: -74.191023,
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
     
     
   };

   render() {
     const { stories, user } = this.props;
        if (!user) {
          return <Redirect to={"/login"} />;}
     return (
       // <Snuggle>
       <div style={sectionStyle}>
            <div className="container">
                <div className="row">
                  <div className="col-sm-3 create-story-box">

        
                    <Map className="map-create" lon={this.state.lon} lat={this.state.lat} inputLocation={this.state.inputLocation} /><br/>
                  
                    <form onSubmit={ (event) => {this.props.onAdd(event, this.state.lon , this.state.lat)} }>
                  

                        <div className="form-group">
                          <input className="form-control create" onChange={this.handleChange} name="location" value={this.state.inputLocation} type="text" placeholder="Tell where it is.." /> 
                        </div>

                        <div class="custom-file form-group">
                          <input name="image" type="file" className="custom-file-input" />
                          <label class="custom-file-label" for="customFile">choose image</label>
                        </div>

                        <div className="form-group">
                          <input className="form-control create" name="title" type="text" placeholder="Story title.." />
                        </div>

                        <div className="form-group">
                          <textarea className="form-control form-text-window" id="tellStory" name="description" rows="5" placeholder="Tell your story...." ></textarea>
                        </div>

                        <div className="form-group-pin">
                          <button name="btn-submit" type="submit" className="btn btn-outline-dark btn-pin">make story</button>
                        </div>
              
                  </form>
                </div>
              </div>
            </div>
        </div>

       //  </Snuggle>

     );
   }
 }

export default CreateStory;

 