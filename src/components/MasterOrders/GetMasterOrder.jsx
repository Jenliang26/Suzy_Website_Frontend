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
            order: [],
            phonenumber: '',
            showmodal: false
        }
        this.ShowOrder = this.ShowOrder.bind(this);
        this.hidemodal = this.hidemodal.bind(this);
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

    async GetCustomer() {
        let response = await axios.get('http://127.0.0.1:8000/api/accounts/customer/' + this.props.masterorder.customer)
        this.setState({customer: response.data})
        console.log(this.state.customer)
    }

    render() {
        console.log(this.props)

        return(
            <tr>
                <td>{this.state.customer.id}</td>
                <td>{this.state.customer.name}</td>
                <td>{this.state.customer.phone_number}</td>
                <td>{this.props.masterorder.date}</td>
                <td>{this.props.masterorder.notes}</td>
                <td>{this.props.masterorder.status}</td>
                <td><Button onClick={this.ShowOrder}/>
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
                    <p>
                    Name, Phone Number, Email
                    </p>
                    <h5>Garment Type</h5>
                    <p>
                    Shirt
                    </p>
                    <h5>Notes</h5>
                    <p>
                    Whatever the note is for that order
                    </p>
                    <h5>Update Status</h5>
                </Modal.Body>
                <Modal.Footer>
                    <Button>Update Status</Button>
                    <Button onClick={this.hidemodal}>Close</Button>
                </Modal.Footer>
                </Modal>
                </td>
            </tr>
        );
    }
}

export default GetMasterOrder;