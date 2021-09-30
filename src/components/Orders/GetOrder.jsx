import axios from 'axios';
import "./Orders.css";
import { Component } from 'react';

class GetOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        console.log(this.props)
        return(
            <tr>
                <td>{this.props.order.date}</td>
                <td>{this.props.order.notes}</td>
                <td>{this.props.order.status}</td>
                <td>View</td>
            </tr>
        );
    }
}

export default GetOrder;