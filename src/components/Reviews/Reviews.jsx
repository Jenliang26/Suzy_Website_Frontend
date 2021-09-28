// import axios from 'axios';
// import "./Reviews.css";
// import { Component } from 'react';
// import "./GetReview";


// class Reviews extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
    
//     componentDidMount () {
//         this.GetReviews ()
//     }

//     async GetReviews() {
//         let response = await axios.get('http://127.0.0.1:8000/api/reviews/'),
//         reviews = response.data
//         console.log(reviews.data)
//     }
    

//     render() {
//         return (
//             <div>
//                 <GetReview  Reviews = {this.state.reviews} />
//             </div>
//         );
//     }
// }

// export default Reviews;