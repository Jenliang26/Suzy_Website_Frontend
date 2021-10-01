import axios from 'axios';
import "./CustomerList.css";
import { Component } from 'react';
import Button from 'react-bootstrap/button';
import { Modal } from 'react-bootstrap';



class GetCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: this.props.customer,
            user: [],
            showmodal: false,
            showcustomerorder: []
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
        this.GetOrders ()
    }

    async GetCustomer() {
        let response = await axios.get('http://127.0.0.1:8000/api/auth/profile/' + this.props.customer.user)
        this.setState({user: response.data})
        console.log(this.state.user)
    }

    async GetOrders() {
        console.log(this.props.customer)
        let response = await axios.get('http://127.0.0.1:8000/api/orders/customer/' + this.props.customer.id)
        this.setState({showcustomerorder: response.data})
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
                    <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.user.first_name} {this.state.user.last_name}</td>
                            <td>{this.state.customer.phone_number}</td>
                            <td>{this.state.user.email}</td>
                        </tr>
                    </tbody>
                    </table>
                    <h5>Orders</h5>
                    <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Order #</th>
                            <th>Date</th>
                            <th>Notes</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.showcustomerorder.map((order, i) => (
                            <tr>
                                <td>{order.id}</td>
                                <td>{order.date}</td>
                                <td>{order.notes}</td>
                                <td>{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button>New Order</Button>
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