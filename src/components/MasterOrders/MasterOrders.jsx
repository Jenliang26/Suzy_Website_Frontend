import axios from 'axios';
import "./MasterOrders.css";
import { Component } from 'react';
import GetMasterOrder from "./GetMasterOrder";


class MasterOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            masterorders: []
        }
    }
    
    componentWillMount () {
        this.MasterOrders ()
    }

    async MasterOrders() {
        let response = await axios.get('http://127.0.0.1:8000/api/orders/')
        this.setState({masterorders: response.data})
        console.log(this.state.masterorders)
    }
    

    render() {
        let masterorders = this.state.masterorders

        return (
        <div className="masterorderstyle">
          <h3 className="p-3 text-center">Orders</h3>
            <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Customer</th>
                    <th>Phone Number</th>
                    <th>Date</th>
                    <th>Notes</th>
                    <th>Status</th> 
                </tr>
            </thead>
            <tbody>
                {masterorders.map((masterorder, i) => (
                    <GetMasterOrder masterorder={masterorder} key={i}/>
                 ))}
            </tbody>
            </table>
        </div>
        );
    }
}

export default MasterOrders;