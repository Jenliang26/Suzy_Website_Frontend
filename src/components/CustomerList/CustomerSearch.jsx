import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import axios from 'axios';


class CustomerSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            showmodal: false,
            searchcriteria: '',
            results: [],
            users: []
        }
        this.filterbyname = this.filterbyname.bind(this);
        this.filterbyphonenumber = this.filterbyphonenumber.bind(this)
        this.filterbyemail = this.filterbyemail.bind(this)
        this.getuseremail = this.getuseremail.bind(this)
    }

    componentWillMount () {
        this.getallcustomers ()
        this.getallusers ()
    }

    async getallcustomers() {
        let response = await axios.get('http://127.0.0.1:8000/api/accounts/customers/')
        this.setState({customers: response.data})
    }

    filterbyname() {
        let res = this.state.customers.filter((c) => {return c.name.toLowerCase().includes(this.state.searchcriteria.toLowerCase())})
        console.log(res)
        let arr = []
        res.forEach(element => {
            let email = this.getuseremail(element.user)
            arr.push({
            name: element.name,
            phonenumber: element.phone_number,
            email: email
        })})
        console.log(arr)
        this.setState({results: arr})
    }

    getuseremail(id) {
        let found = this.state.users.filter((u) => {return u.id == id})
        return found[0].email
    }

    getcustomer(id) {
        let found = this.state.customers.filter((u) => {return u.user == id})
        return found[0]
    }

    async getallusers(id) {
        let response = await axios.get('http://127.0.0.1:8000/api/auth/profile/')
        this.setState({users: response.data})
    }

    filterbyphonenumber() {
        let res = this.state.customers.filter((c) => {return c.phone_number.includes(this.state.searchcriteria)})
        console.log(res)
        let arr = []
        res.forEach(element => {
            let email = this.getuseremail(element.user)
            arr.push({
            name: element.name,
            phonenumber: element.phone_number,
            email: email
        })})
        console.log(arr)
        this.setState({results: arr})
    }

    filterbyemail() {
        let res = this.state.users.filter((c) => {return c.email.includes(this.state.searchcriteria)})
        console.log(res)
        let arr = []
        res.forEach(element => {
            let customer = this.getcustomer(element.id)
            try{
                arr.push({
                name: customer.name,
                phonenumber: customer.phone_number,
                email: element.email
                })
            }
            catch(error) {
            }
        })
        console.log(arr)
        this.setState({results: arr})
    }

    render() {
        console.log(this.state.results)
        return(
            <div class="input-group">
                <div class="input-group-append"><label id="SearchWord">Search</label></div>
                <input onChange={(e) => this.setState({searchcriteria: e.target.value})} value={this.state.searchcriteria} name="searchcriteria" id="searchcriteria" type="text" />
                <DropdownButton id="dropdown-basic-button" title="Search By">
                    <Dropdown.Item onClick={this.filterbyname}>Name</Dropdown.Item>
                    <Dropdown.Item onClick={this.filterbyphonenumber}>Phone Number</Dropdown.Item>
                    <Dropdown.Item onClick={this.filterbyemail}>Email</Dropdown.Item>
                </DropdownButton>
                <br />
                <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.results.map((r) => (
                            <tr key={r.name}>
                                <td>{r.name}</td>
                                <td>{r.phonenumber}</td>
                                <td>{r.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        ); 
    }
}

export default CustomerSearch;