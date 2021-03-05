import React, { Component } from 'react';
import Snuggle from 'react-snuggle';
import Map from './Map';

 class AllStories extends Component {

    // state = {
    //     stories: []
    // }

    render() {
        return (
            <Snuggle >
                <div className="card-story">
                    <Map />

                </div>
            </Snuggle> 
        )
    }
}

export default AllStories;