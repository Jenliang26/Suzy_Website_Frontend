import axios from 'axios';
import "./Orders.css";
import { Component } from 'react';
import GetOrder from "./GetOrder";



class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            customer_id: this.props.user,
            customer: []
        }
    }
    
    componentWillMount () {
        // this.GetCustomer()
        this.GetOrders ()
    }

    async GetOrders() {
        let response = await axios.get('http://127.0.0.1:8000/api/orders/')
        this.setState({orders: response.data})
        this.filterorders()
    }

    async GetCustomer() {
        let response = await axios.get('http://127.0.0.1:8000/api/accounts/customers/user/' + this.state.customer_id)
        this.setState({customer: response.data})
    }
    
    filterorders() {
        let list = this.state.orders.filter((order) => {
            return (order.customer === this.state.customer_id)
        })
        this.setState({orders: list})
    }

    render() {
        let orders = this.state.orders

        return (
        <div className="orderstyle">
          <h3 className="p-3 text-center">Your Orders</h3>
            <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Order Number</th>
                    <th>Date</th>
                    <th>Notes</th>
                    <th>Status</th> 
                    <th>Additional Info</th>
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