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
            garmentslist:[],
            showmodal: false,
            garmentnumber: 0,
            type: '',
            quantity: '',
            phone_number: '',
            notes: ''
        }
        this.garmentmodal = this.garmentmodal.bind(this);
        this.hidemodal = this.hidemodal.bind(this);
        this.addgarment = this.addgarment.bind(this);
        this.createorder = this.createorder.bind(this);
    }

    async createorder() {
        let responsej = await axios.get('http://127.0.0.1:8000/api/accounts/customers/')
        let customers = responsej.data
        let customer = customers.filter((c) => {
            if (c.phone_number === this.state.phone_number) {
                return true
            }
            else {
                return false
            }
        })
        let date = new Date()
        let datestring = (date.getFullYear() +  "-" + (date.getMonth()+1) + "-" + date.getDate()) 
        let order = {
            customer: customer[0].id,
            date: datestring,
            notes: this.state.notes,
            status: "1"
        }
        let response = await axios.post('http://127.0.0.1:8000/api/orders/', order)
        this.state.garmentslist.map((garment) => {
            garment.order = response.data.id
        })
        console.log(this.state.garmentslist)
        for(let i = 0; i < this.state.garmentslist.length; i++) {
            let responsek = await axios.post('http://127.0.0.1:8000/api/orders/garment/', this.state.garmentslist[i])
        }
        this.forceUpdate()
        window.location = '/masterorders';
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
        let garment = {
            type: this.state.type,
            quantity: this.state.quantity,
            order: "0" 
        }
        let list = [...this.state.garmentslist]
        list.push(garment)
        this.setState({
            garmentslist: list
        })
        this.forceUpdate() 
    }

    render() {
        let date = new Date()
        let datestring = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear()
        return(
            <div className="masterorderstyle scrollable">
            <Button onClick={this.createorder}>Create Order</Button>
          <h3 className="p-3 text-center">Create New Order</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Phone Number</th><td><input onChange={(e) => this.setState({phone_number: e.target.value})} value={this.state.phone_number} name="phone_number" id="phone_number" type="text" /></td>
                    </tr>
                    <tr>
                        <th>Date</th><td>{datestring}</td>
                    </tr>
                    <tr>
                        <th valign="top">Notes</th><td><textarea rows="3" onChange={(e) => this.setState({notes: e.target.value})} value={this.state.notes} name="notes" id="notes" type="text" /></td>
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
                            <th>Type</th><td><input onChange={(e) => this.setState({type: e.target.value})} value={this.state.type} name="type" id="type" type="text" /></td>
                        </tr>
                        <tr>
                            <th>Quantity</th><td><input onChange={(e) => this.setState({quantity: e.target.value})} value={this.state.quantity} name="quantity" id="quantity" type="text" /></td>
                        </tr>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.addgarment}>Add</Button>
                    <Button onClick={this.hidemodal}>Close</Button>
                </Modal.Footer>
                </Modal>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default CreateOrder;