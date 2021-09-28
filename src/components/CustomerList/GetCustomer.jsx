import axios from 'axios';
import "./CustomerList.css";
import { Component } from 'react';

class GetCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        console.log(this.props)
        return(
            <tr>
                <td>User: {this.props.customer.user}</td>
                <td>Name: {this.props.customer.name}</td>
                <td>Phone Number: {this.props.customer.phone_number}</td>
                <td>View</td>
            </tr>
        );
    }
}

export default GetCustomer;