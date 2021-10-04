import React from 'react';
import './Home.css';
import MyCarousel from '../Carousel/Carousel';
import axios from 'axios';
import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
    }

    componentWillMount () {
        this.getreviews()
    }

    async getreviews() {
        let response = await axios.get('http://127.0.0.1:8000/api/reviews/')
        this.setState({reviews: response.data})
    }

    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="text-center">
                            <MyCarousel />
                            <Carousel variant="dark">
                            {this.state.reviews.map((review, i) => (
                                <Carousel.Item>
                                    <h5><b>{review.name} {review.date}</b></h5>
                                    <p><b>{review.number_rating}/5 Stars</b></p>
                                    <p><b>{review.comment}</b></p>
                            <br />
                                </Carousel.Item>
                            ))}
                            </Carousel>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
