import axios from 'axios';
import "./MasterOrders.css";
import { Component } from 'react';
import GetMasterOrder from "./GetMasterOrder";
import Button from 'react-bootstrap/button';



class MasterOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            masterorders: []
        }
        this.createneworder = this.createneworder.bind(this);
    }
    
    componentWillMount () {
        this.MasterOrders ()
    }

    async MasterOrders() {
        let response = await axios.get('http://127.0.0.1:8000/api/orders/')
        this.setState({masterorders: response.data})
        console.log(this.state.masterorders)
    }
    
    createneworder() {
        window.location = '/neworder';
    }

    render() {
        let masterorders = this.state.masterorders

        return (
        <div className="masterorderstyle">
            <Button onClick={this.createneworder}>Create New Order</Button>
          <h3 className="p-3 text-center">Orders</h3>
            <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Phone Number</th>
                    <th>Date</th>
                    <th>Notes</th>
                    <th>Status</th>
                    <th>Additional Info</th>
                </tr>
            </thead>
            <tbody>
                {masterorders.map((order, i) => (
                    <GetMasterOrder order={order} key={i} masterorder={this.state.masterorders}/>
                 ))}
            </tbody>
            </table>
        </div>
        );
    }
}

export default MasterOrders;