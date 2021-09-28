import axios from 'axios';
import "./Orders.css";
import { Component } from 'react';
import GetOrder from "./GetOrder";


class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }
    
    componentWillMount () {
        this.GetOrders ()
    }

    async GetOrders() {
        let response = await axios.get('http://127.0.0.1:8000/api/orders/')
        this.setState({orders: response.data})
        console.log(this.state.orders)
    }
    

    render() {
        let orders = this.state.orders

        return (
        <div className="inventorystyle">
          <h3 className="p-3 text-center">Your Orders</h3>
            <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Notes</th>
                    <th>Status</th> 
                </tr>
            </thead>
            <tbody>
                {orders.map((order, i) => (
                    <GetOrder order={order} key={i}/>
                 ))}
            </tbody>
            </table>
        </div>
        );
    }
}

export default Orders;