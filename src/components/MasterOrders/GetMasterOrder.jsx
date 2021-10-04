import axios from 'axios';
import "./MasterOrders.css";
import { Component } from 'react';
import Button from 'react-bootstrap/button';
import { Modal } from 'react-bootstrap';

class GetMasterOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: [],
            order: this.props.order,
            phonenumber: '',
            showmodal: false,
            status: this.props.order.status,
            masterorders: this.props.masterorders
        }
        this.ShowOrder = this.ShowOrder.bind(this);
        this.hidemodal = this.hidemodal.bind(this);
        this.updatestatus = this.updatestatus.bind(this);
    }

    ShowOrder() {
        this.setState({showmodal: true})
        this.forceUpdate()
        console.log(this.state.showmodal)
    }

    hidemodal() {
        this.setState({
            showmodal: false
        })
    }

    componentWillMount () {
        this.GetCustomer ()
    }

    async updatestatus(event) {
        event.preventDefault()
        let newstatus = {
            date: this.state.order.date,
            notes: this.state.order.notes,
            status: this.state.status
        }
        let request = await axios.put('http://127.0.0.1:8000/api/orders/detail/' + this.state.order.id + '/', newstatus)
        this.setState({
            order: request.data,
        })
        let response = await axios.get('http://127.0.0.1:8000/api/orders/')
        this.setState({masterorders: response.data})
        this.hidemodal()
        this.forceUpdate()
    }

    async GetCustomer() {
        let response = await axios.get('http://127.0.0.1:8000/api/accounts/customer/' + this.props.order.customer)
        this.setState({customer: response.data})
        console.log(this.state.customer)
    }

    render() {
        console.log(this.props)

        return(
            <tr>
                <td>{this.state.order.id}</td>
                <td>{this.state.customer.name}</td>
                <td>{this.state.customer.phone_number}</td>
                <td>{this.state.order.date}</td>
                <td>{this.state.order.notes}</td>
                <td>{this.state.order.status}</td>
                <td><Button onClick={this.ShowOrder}>View</Button>
                <Modal
                    show={this.state.showmodal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Order Info
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Customer Info</h5>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name: </td>
                                <td>{this.state.customer.name}</td>
                            </tr>
                            <tr>
                                <td>Phone Number: </td>
                                <td>{this.state.customer.phone_number}</td>
                            </tr>
                            <tr>
                                <td>Date: </td>
                                <td>{this.state.order.date}</td>
                            </tr>
                            <tr>
                                <td>Notes: </td>
                                <td>{this.state.order.notes}</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <br />
                    <h5>Update Status</h5>
                    <input onChange={(e) => this.setState({status: e.target.value})} value={this.state.status} name="status" id="status" type="text" />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.updatestatus}>Update Status</Button>
                    <Button onClick={this.hidemodal}>Close</Button>
                </Modal.Footer>
                </Modal>
                </td>
            </tr>
        );
    }
}

export default GetMasterOrder;