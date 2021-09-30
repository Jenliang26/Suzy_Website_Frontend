import axios from 'axios';
import "./CustomerList.css";
import { Component } from 'react';
import Button from 'react-bootstrap/button';
import { Modal } from 'react-bootstrap';



class GetCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: [],
            user: [],
            showmodal: false
        }
        this.ShowCustomer = this.ShowCustomer.bind(this);
        this.hidemodal = this.hidemodal.bind(this);
    }

    ShowCustomer() {
        this.setState({showmodal: true})
        this.forceUpdate()
        console.log(this.state.showmodal)
    }

    hidemodal() {
        this.setState({
            showmodal: false
        })
    }

    componentWillMount() {
        this.GetCustomer ()
    }

    async GetCustomer() {
        let responseu = await axios.get('http://127.0.0.1:8000/api/auth/profile/' + this.props.customer.user)
        this.setState({user: responseu.data})
    }

    render() {
        return(
            <tr>
                <td>{this.props.customer.name}</td>
                <td>{this.props.customer.phone_number}</td>
                <td>{this.state.user.email}</td>
                <td><Button onClick={this.ShowCustomer}/>
                <Modal
                    show={this.state.showmodal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Customer Info
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Contact Info</h5>
                    <p>
                    Name, Phone Number, Email
                    </p>
                    <h5>Orders</h5>
                    <p>
                    List of orders
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.hidemodal}>Close</Button>
                </Modal.Footer>
                </Modal>
                {/* <ViewCustomer showmodal={this.state.showmodal} customer={this.props.customer} user={this.state.user}/> */}
                </td>
            </tr>
        );
    }
}

export default GetCustomer;