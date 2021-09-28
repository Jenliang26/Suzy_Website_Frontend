// import axios from 'axios';
// import "./Orders.css";
// import { Component } from 'react';
// import "./GetOrder";


// class Orders extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
    
//     componentDidMount () {
//         this.GetOrders ()
//     }

//     async GetOrders() {
//         let response = await axios.get('http://127.0.0.1:8000/api/orders/'),
//         orders = response.data
//         console.log(orders.data)
//     }
    

//     render() {
//         return (
//             <div>
//                 <GetOrder  Orders = {this.state.orders} />
//             </div>
//         );
//     }
// }

// export default Orders;