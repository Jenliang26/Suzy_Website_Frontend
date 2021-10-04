import axios from 'axios';
import "./Inventory.css";
import { Component } from 'react';
import InventoryItem from "./InventoryItem";
import Button from 'react-bootstrap/button';
import { Modal, Table } from 'react-bootstrap';


class Inventories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventories: [],
            showmodal: false,
            Name: "",
            Description: "",
            Quantity: "",
            Category: "",
            isdeleted: false
        }
        this.createnewinventory=this.createnewinventory.bind(this);
        this.showmodal = this.showmodal.bind(this);
        this.hidemodal = this.hidemodal.bind(this);
    }

    showmodal() {
        this.setState({showmodal: true})
        this.forceUpdate()
    }

    hidemodal() {
        this.setState({
            showmodal: false
        })
    }

    async createnewinventory(event) {
        event.preventDefault()
        let newitem = {
            name: this.state.Name,
            description: this.state.Description,
            quantity: this.state.Quantity,
            category: this.state.Category
        }
        let request = await axios.post('http://127.0.0.1:8000/api/inventory/', newitem)
        this.GetInventories()
        this.setState({
            showmodal: false
        })
        this.forceUpdate()
    }
    
    componentWillMount () {
        this.GetInventories ()
    }

    async GetInventories() {
        let response = await axios.get('http://127.0.0.1:8000/api/inventory/')
        this.setState({inventories: response.data})

    }
    

    render() {
        let inventories = this.state.inventories

        return (
        <div className="row">
        <div className="col-2">
            <Button onClick={this.showmodal}>Create New Inventory</Button>
            <form id="newinventoryform">
            <Modal
                    show={this.state.showmodal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                    New Inventory
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td><input onChange={(e) => this.setState({Name: e.target.value})} value={this.state.Name} name="name" id="name" type="text" /></td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td><input onChange={(e) => this.setState({Description: e.target.value})} value={this.state.Description} name="descritption" id="description" type="text" /></td>
                            </tr>
                            <tr>
                                <td>Quantity</td>
                                <td><input onChange={(e) => this.setState({Quantity: e.target.value})} value={this.state.Quantity} name="quantity" id="quantity" type="text" /></td>
                            </tr>
                            <tr>
                                <td>Category</td>
                                <td><input onChange={(e) => this.setState({Category: e.target.value})} value={this.state.Category} name="category" id="category" type="text" /></td>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.createnewinventory} type="submit" form="newinventoryform">Add</Button>
                    <Button onClick={this.hidemodal}>Close</Button>
                </Modal.Footer>
            </Modal>
            </form>
        </div>
        <div className="col-8 text-center">
          <h3>Inventories</h3>
            <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Category</th> 
                </tr>
            </thead>
            <tbody>
                {this.state.inventories.map((inventory, i) => (
                    <InventoryItem inventory={inventory} key={i} inventories={this.state.inventories}/>
                 ))}
            </tbody>
            </table>
        </div>
        <div className="col-2"></div>
        </div>
        );
    }
}

export default Inventories;
  
  