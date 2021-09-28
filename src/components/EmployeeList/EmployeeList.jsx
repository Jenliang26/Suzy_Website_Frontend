// import axios from 'axios';
// import "./EmployeeList.css";
// import { Component } from 'react';
// import "./GetEmployee";


// class EmployeeList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
    
//     componentDidMount () {
//         this.GetEmployeeList ()
//     }

//     async GetEmployeeList() {
//         let response = await axios.get('http://127.0.0.1:8000/api/accounts/employees/'),
//         employeelist = response.data
//         console.log(employeelist.data)
//     }
    

//     render() {
//         return (
//             <div>
//                 <GetEmployee  EmployeeList = {this.state.employeelist} />
//             </div>
//         );
//     }
// }

// export default EmployeeList;