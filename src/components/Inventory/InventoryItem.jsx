import axios from 'axios';
import "./Inventory.css";
import { Component } from 'react';

class InventoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        console.log(this.props)
        return(
            <tr>
                <td>Name: {this.props.inventory.name}</td>
                <td>Description: {this.props.inventory.description}</td>
                <td>Quantity: {this.props.inventory.quantity}</td>
                <td>Category: {this.props.inventory.category}</td>
                <td>Update</td>
                <td>Delete</td>
            </tr>
        );
    }
}

export default InventoryItem;