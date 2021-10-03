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
            newinventoryitem: {
                Name: "",
                Description: "",
                Quantity: "",
                Category: ""
            }
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

    createnewinventory() {
        console.log("Did it create new inventory??????")
    }
    
    componentWillMount () {
        this.GetInventories ()
    }

    async GetInventories() {
        let response = await axios.get('http://127.0.0.1:8000/api/inventory/')
        this.setState({inventories: response.data})
        console.log(this.state.inventories)
    }
    

    render() {
        let inventories = this.state.inventories

        return (
        <div className="row">
        <div className="col-2">
            <Button onClick={this.showmodal}>Create New Inventory</Button>
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
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td>Quantity</td>
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td>Category</td>
                                <td><input></input></td>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.createnewinventory}>Add</Button>
                    <Button onClick={this.hidemodal}>Close</Button>
                </Modal.Footer>
                </Modal>
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
                {inventories.map((inventory, i) => (
                    <InventoryItem inventory={inventory} key={i}/>
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
  
  