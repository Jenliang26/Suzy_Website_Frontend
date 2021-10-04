import axios from 'axios';
import "./Orders.css";
import { Component } from 'react';
import Button from 'react-bootstrap/button';
import { Modal } from 'react-bootstrap';

class GetOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

    render() {
        return(
            <tr>
                <td>{this.props.order.id}</td>
                <td>{this.props.order.date}</td>
                <td>{this.props.order.notes}</td>
                <td>{this.props.order.status}</td>
                <td><Button onClick={this.ShowOrder}>View</Button>
                <Modal
                    show={this.state.showmodal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Order Statuses
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                    Status 1: Order created
                    </p>
                    <p>
                    Status 2: Order started
                    </p>
                    <p>
                    Status 3: Order complete/Ready for pick up
                    </p>
                    <p>
                    Status 4: Picked up by customer
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.hidemodal}>Close</Button>
                </Modal.Footer>
                </Modal>
                </td>
            </tr>
        );
    }
}

export default GetOrder;