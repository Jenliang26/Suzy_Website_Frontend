import axios from 'axios';
import "./Reviews.css";
import { Component } from 'react';
import "./GetReview";
import Button from 'react-bootstrap/button';


class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            review: '',
            rating: '',
            name: 'Anonymous',
            date: ''
        }
        this.postreview = this.postreview.bind(this)
    }
    
    async postreview() {
        let date = new Date()
        let datestring = ((date.getFullYear() +  "-" + (date.getMonth()+1) + "-" + date.getDate()))
        let comment = {
            name: this.state.name,
            date: datestring,
            number_rating: this.state.rating,
            comment: this.state.review
        }
        console.log(comment)
        let response = await axios.post('http://127.0.0.1:8000/api/reviews/', comment)
        window.location = '/';
    }

    render() {
        return (
            <div className="text-center">
                <h3>Name</h3>
                <input onChange={(e) => this.setState({name: e.target.value})} value={this.state.name} name="name" id="name" type="text" />
                <h3>Please leave a rating of 1-5 </h3>
                <input onChange={(e) => this.setState({rating: e.target.value})} value={this.state.rating} name="rating" id="rating" type="text" />
                <h3>Please leave your review below</h3>
                <textarea rows="5" cols="80" onChange={(e) => this.setState({review: e.target.value})} value={this.state.review} name="review" id="review" type="text" />
                <br />
                <Button onClick={this.postreview}>Add Review</Button>
            </div>
        );
    }
}

export default Reviews;