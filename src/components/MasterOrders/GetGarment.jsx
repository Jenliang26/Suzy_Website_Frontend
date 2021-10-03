import axios from 'axios';
import "./MasterOrders.css";
import { Component } from 'react';
import Button from 'react-bootstrap/button';

class GetGarment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    ////////////Do we need an axios call here to get garment to display?????????????????????????????????????????????????????????

    render() {
        return(
            <tr>
                <td>{this.props.garment.type}</td>
                <td>{this.props.garment.quantity}</td>
            </tr>
        )
    }
}

export default GetGarment;