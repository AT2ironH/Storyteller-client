import React, { Component } from 'react';
import Snuggle from 'react-snuggle';
import Map from './Map';
import axios from 'axios';
import config from '../config'


 class CreateStory extends Component {

    state = {
       stories: [],
       loggedInUser: null,
       error: null,

    }

    handleSubmit =(event) => {
        event.preventDefault() 
            let location = event.target.location.value
            let image = event.target.image.files[0]
            let title = event.target.title.value
            let description = event.target.description.value
            // let public = event.target.public.value
            
        

        let uploadForm = new FormData()
        uploadForm.append('imageUrl', image)

        // send image to cloudinary
        axios.post(`${config.API_Url}/api/upload`, uploadForm)
            
        .then((response) => {
            // make an API call to the server side route to create a new story
            axios.post(`${config.API_URL}/api/create`, {

                location: location,
                image: response.data.image,
                title: title,
                description: description,
                // public: public,
                completed: false

            })

        .then((response) => {
            // when the server has created a story
            // update the state that is visible to the user
            this.setState({
                stories: [response.data, ...this.state.stories]
            }, () => {
            // when story is created lead user to his page
                this.props.history.push('/api/user/:userId')
            })
        })
        .catch((error) => {
            console.log("Creating story failed", error)
        })        

        })

    }

    render() {
        return (

                <Snuggle>
                    <div className="card-story">
                        <Map />

                            <form onSubmit={this.props.onCreate}>
                                <input name="location" type="text" placeholder="Tell where it is.." /><br/>
                                <input name="image" type="file" cols="35"/><br/>
                                <input name="title" type="text" placeholder="Tell the title of your story.." /><br/>
                                <textarea id="tellStory" name="description" placeholder="Tell your story...." rows="8" cols="35"></textarea><br/>

                                <input name="btn-public" type="checkbox" className="btn-hide-show" data-type="simple-switch" />

                                <button name="btn-submit" type="submit">pin</button>
                            </form>

                    </div>
                   
                </Snuggle>

            //      {/* <Route path="/api/create" render={() => {
            //     return <CreateStory onCreate={this.handleSubmit} />
            // }} /> */}

                    
        )
    }
}

export default CreateStory;

 