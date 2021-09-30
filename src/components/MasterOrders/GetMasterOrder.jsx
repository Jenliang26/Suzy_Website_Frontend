import axios from 'axios';
import "./MasterOrders.css";
import { Component } from 'react';

class GetMasterOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: [],
            phonenumber: ''
        }
    }

    componentWillMount () {
        this.GetCustomer ()
    }

    async GetCustomer() {
        let response = await axios.get('http://127.0.0.1:8000/api/accounts/customer/' + this.props.masterorder.customer)
        this.setState({customer: response.data})
        console.log(this.state.customer)
    }

    render() {
        console.log(this.props)

        return(
            <tr>
                <td>{this.state.customer.name}</td>
                <td>{this.state.customer.phone_number}</td>
                <td>{this.props.masterorder.date}</td>
                <td>{this.props.masterorder.notes}</td>
                <td>{this.props.masterorder.status}</td>
                <td>View</td>
            </tr>
        );
    }
}

export default GetMasterOrder;