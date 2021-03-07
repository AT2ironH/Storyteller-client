import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Snuggle from 'react-snuggle';
import Map from './Map';
import axios from 'axios';
import config from '../config';


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
     // once api is successful
     
   };

   render() {
     return (
       // <Snuggle>
            <div className="container">
                <div className="row">
                <div className="col-sm-3">

        
                    <Map lon={this.state.lon} lat={this.state.lat} inputLocation={this.state.inputLocation} /><br/>
                  
                    <form onSubmit={this.props.onAdd}>
                  

                        <div className="form-group">
                          <input className="form-control" onChange={this.handleChange} name="location" value={this.state.inputLocation} type="text" placeholder="Tell where it is.." /> 
                        </div>

                        <div class="custom-file">
                          <input name="image" type="file" className="custom-file-input" />
                          <label class="custom-file-label" for="customFile">choose image</label>
                        </div>

                        <div className="form-group">
                          <input className="form-control" name="title" type="text" placeholder="Tell the title of your story.." />
                        </div>

                        <div className="form-group">
                          <textarea className="form-control" id="tellStory" name="description" rows="6" placeholder="Tell your story...." ></textarea>
                        </div>

                        <div className="form-group">
                          <input name="btn-public" type="checkbox" className="btn-hide-show" data-type="simple-switch" />
                          <label className="hide-show-label">private</label>
                        </div>

                        <div className="form-group">
                          <button name="btn-submit" type="submit" className="btn btn-outline-dark">pin</button>
                        </div>
              
              </form>
              </div>
              </div>
            </div>

       //  </Snuggle>

     );
   }
 }

export default CreateStory;

 