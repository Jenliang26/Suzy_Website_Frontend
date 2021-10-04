import axios from 'axios';
import { Component } from 'react';
import Button from 'react-bootstrap/button';


class OrderStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [],
            order_number: '',
            status: ''
        }
        this.getstatus = this.getstatus.bind(this);
    }

    async getstatus() {
        let response = await axios.get('http://127.0.0.1:8000/api/orders/detail/' + this.state.order_number)
        this.setState({status: response.data.status}) 
    }

    render() {
        return(
            <div className= "text-center">
                <br />
                <br />
                <br />
                <h3>Order Number</h3>
                <input onChange={(e) => this.setState({order_number: e.target.value})} value={this.state.order_number} name="order_number" id="order_number" type="text" />
                <Button onClick={this.getstatus}>Get Status</Button>
                <table align="center">
                    <thead>
                        <tr>
                            <th>Status: </th>
                            <td>{this.state.status}</td>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

export default OrderStatus;
