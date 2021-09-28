import axios from 'axios';
import "./EmployeeList.css";
import { Component } from 'react';

class GetEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        console.log(this.props)
        return(
            <tr>
                <td>User: {this.props.employee.user}</td>
                <td>Name: {this.props.employee.name}</td>
                <td>View</td>
            </tr>
        );
    }
}

export default GetEmployee;