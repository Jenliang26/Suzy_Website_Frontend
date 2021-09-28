// import axios from 'axios';
// import "./CustomerList.css";
// import { Component } from 'react';
// import "./GetCustomer";


// class CustomerList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
    
//     componentDidMount () {
//         this.GetCustomerList ()
//     }

//     async GetCustomerList() {
//         let response = await axios.get('http://127.0.0.1:8000/api/accounts/customers/'),
//         customerlist = response.data
//         console.log(customerlist.data)
//     }
    

//     render() {
//         return (
//             <div>
//                 <GetCustomer  CustomerList = {this.state.customerlist} />
//             </div>
//         );
//     }
// }

// export default CustomerList;