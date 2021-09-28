import axios from 'axios';
import "./EmployeeList.css";
import { Component } from 'react';
import GetEmployee from "./GetEmployee";


class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }
    
    componentWillMount () {
        this.GetEmployeeList ()
    }

    async GetEmployeeList() {
        let response = await axios.get('http://127.0.0.1:8000/api/accounts/employees/')
        this.setState({employees: response.data})
        console.log(this.state.employees)
    }
    

    render() {
        let employees = this.state.employees

        return (
        <div className="employeeliststyle">
          <h3 className="p-3 text-center">Employees</h3>
            <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>User</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, i) => (
                    <GetEmployee employee={employee} key={i}/>
                 ))}
            </tbody>
            </table>
        </div>
        );
    }
}

export default EmployeeList;