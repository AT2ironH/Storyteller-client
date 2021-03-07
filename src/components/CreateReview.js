import React, { Component } from 'react';
import config from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';

// private does noet work ==========================================!!
// image is added but the name of the file is not visible ==========!!


class CreateReview extends Component {

    // state = {
    //     review: {},
    // }

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-sm-3">

                    <form onSubmit={this.props.onAdd}>
                        <div className="form-group">
                        <textarea className="form-control" id="review" name="review" rows="6" placeholder="Write your review.." ></textarea>
                        </div>

                        <div className="form-group">
                            <button name="btn-submit" type="submit" className="btn btn-outline-dark">place</button>
                        </div>
                    </form>
                
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateReview;
