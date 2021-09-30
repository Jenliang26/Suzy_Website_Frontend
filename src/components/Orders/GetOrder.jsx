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
        console.log(this.props)
        return(
            <tr>
                <td>{this.props.order.id}</td>
                <td>{this.props.order.date}</td>
                <td>{this.props.order.notes}</td>
                <td>{this.props.order.status}</td>
                <td><Button onClick={this.ShowOrder}/>
                <Modal
                    show={this.state.showmodal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Order Status
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                    Show progress somehow
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