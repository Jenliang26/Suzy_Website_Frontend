import axios from 'axios';
import "./CustomerList.css";
import { Component } from 'react';
import GetCustomer from "./GetCustomer";
import CustomerSearch from './CustomerSearch'


class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: []
        }
    }
    
    componentWillMount () {
        this.GetCustomerList ()
    }

    async GetCustomerList() {
        let response = await axios.get('http://127.0.0.1:8000/api/accounts/customers/')
        this.setState({customers: response.data})
        console.log(this.state.customers)
    }
    

    render() {
        let customers = this.state.customers

        return (
        <div className="customerliststyle">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4"><h3 className="p-3 text-center">Customers</h3></div>
                <div className="col-4 text-right"><CustomerSearch /></div>
            </div>
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
        );
    }
}

export default CustomerList;