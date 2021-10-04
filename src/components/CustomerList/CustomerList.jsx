import axios from 'axios';
import "./CustomerList.css";
import { Component } from 'react';
import GetCustomer from "./GetCustomer";
import CustomerSearch from './CustomerSearch'
import Button from 'react-bootstrap/button';
import { Modal, Table } from 'react-bootstrap';


class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            showmodal: false,
            first_name: "",
            last_name: "",
            phone_number: "",
            email: "",
            isdeleted: false
        }
        this.createnewcustomer=this.createnewcustomer.bind(this);
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

    async createnewcustomer(event) {
        event.preventDefault()
        let rnd = Math.floor(Math.random()*500000)
        let newuser = {
            username: "Customer0" + rnd,
            password: "Asianp1g!",
            email: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name
        }

        let requestu = await axios.post('http://127.0.0.1:8000/api/auth/register/', newuser)
        let id = requestu.data.id

        let newcustomer = {
            user: id,
            name: this.state.first_name + " " + this.state.last_name,
            phone_number: this.state.phone_number
        }
        
        let request = await axios.post('http://127.0.0.1:8000/api/accounts/customers/', newcustomer)
        this.GetCustomerList()
        this.setState({
            showmodal: false
        })
        this.forceUpdate()
    }
    
    componentWillMount () {
        this.GetCustomerList ()
    }

    async GetCustomerList() {
        let response = await axios.get('http://127.0.0.1:8000/api/accounts/customers/')
        this.setState({customers: response.data})
        this.setState({isdeleted: false})
        console.log(this.state.customers)
    }
    

    render() {
        let customers = this.state.customers

        return (
        <div className="row">
        <div className="col-2">
            <Button onClick={this.showmodal}>Create New Customer</Button>
            <form id="newcustomerform">
            <Modal
                    show={this.state.showmodal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                    New Customer
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table>
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td><input onChange={(e) => this.setState({first_name: e.target.value})} value={this.state.first_name} name="first_name" id="first_name" type="text" /></td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td><input onChange={(e) => this.setState({last_name: e.target.value})} value={this.state.last_name} name="last_name" id="last_name" type="text" /></td>
                            </tr>
                            <tr>
                                <td>Phone Number</td>
                                <td><input onChange={(e) => this.setState({phone_number: e.target.value})} value={this.state.phone_number} name="phone_number" id="phone_number" type="text" /></td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td><input onChange={(e) => this.setState({email: e.target.value})} value={this.state.email} name="email" id="email" type="text" /></td>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.createnewcustomer} type="submit" form="newcustomerform">Create</Button>
                    <Button onClick={this.hidemodal}>Close</Button>
                </Modal.Footer>
            </Modal>
            </form>
        </div>
        <div className="col-8 text-center">
          <h3>Customers</h3>
            <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Additional Info</th> 
                </tr>
            </thead>
            <tbody>
                {customers.map((customer, i) => (
                    <GetCustomer customer={customer} key={i}/>
                 ))}
            </tbody>
            </table>
        </div>
        <div className="col-2"></div>
        </div>
        );
    }
}

export default CustomerList;