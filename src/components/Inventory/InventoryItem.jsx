import axios from 'axios';
import "./Inventory.css";
import { Component } from 'react';
import Button from 'react-bootstrap/button';

class InventoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventories: this.props.inventories
        }
        this.deleteinventoryitem=this.deleteinventoryitem.bind(this)
    }

    async GetInventories() {
        let response = await axios.get('http://127.0.0.1:8000/api/inventory/')
        this.setState({inventories: response.data})
        this.forceUpdate()
    }

    deleteinventoryitem() {
        let response = axios.delete('http://127.0.0.1:8000/api/inventory/item/' + this.props.inventory.id)
        this.GetInventories()
    }

    render() {
        return(
            <tr>
                <td>{this.props.inventory.name}</td>
                <td>{this.props.inventory.description}</td>
                <td>{this.props.inventory.quantity}</td>
                <td>{this.props.inventory.category}</td>
                <td><Button onClick={this.deleteinventoryitem}>Delete</Button></td>
            </tr>
        );
    }
}

export default InventoryItem;