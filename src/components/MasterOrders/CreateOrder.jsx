import axios from 'axios';
import "./MasterOrders.css";
import { Component } from 'react';
import Button from 'react-bootstrap/button';
import { Modal } from 'react-bootstrap';
import GetGarment from './GetGarment';


class CreateOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            garmentslist:[{type: '', quantity: ''}],
            showmodal: false,
            garmentnumber: 0
        }
        this.garmentmodal = this.garmentmodal.bind(this);
        this.hidemodal = this.hidemodal.bind(this);
    }

    garmentmodal() {
        this.setState({showmodal: true})
        this.forceUpdate()
    }

    hidemodal() {
        this.setState({
            showmodal: false
        })
    }

    addgarment() {
        this.setState({
        })
    }

     

    render() {
        return(
            <div className="masterorderstyle">
          <h3 className="p-3 text-center">Create New Order</h3>
            <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Phone Number</th><td><input type="text" /></td>
                </tr>
                <tr>
                    <th>Date</th><td><input type="text" /></td>
                </tr>
                <tr>
                    <th>Notes</th><td><input type="text" /></td>
                </tr>
            </thead>
            </table>

            <h3 className="p-3 text-center">Garments</h3>
            <Button onClick={this.garmentmodal}>Add Garment</Button>
            <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Garment Type</th>
                    <th>Garment Quantity</th>
                </tr>
            </thead>
            <tbody>
                {this.state.garmentslist.map((garment, i) => (
                    <GetGarment garment={garment} key={i}/>
                ))}
            </tbody>
            </table>
            <Modal
                    show={this.state.showmodal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                    New Garment
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table>
                        <tr>
                            <th>Type</th><td><input type="text" value={this.state.garmentslist[this.state.garmentnumber].type} /></td>
                        </tr>
                        <tr>
                            <th>Quantity</th><td><input type="text" value={this.state.garmentslist[this.state.garmentnumber].quantity}/></td>
                        </tr>
                        ///////////input make form!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.addgarment}>Add</Button>
                    <Button onClick={this.hidemodal}>Close</Button>
                </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default CreateOrder;