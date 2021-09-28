import axios from 'axios';
import "./Inventory.css";
import { Component } from 'react';
import InventoryItem from "./InventoryItem";


class Inventories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventories: []
        }
    }
    
    componentWillMount () {
        this.GetInventories ()
    }

    async GetInventories() {
        let response = await axios.get('http://127.0.0.1:8000/api/inventory/')
        this.setState({inventories: response.data})
        console.log(this.state.inventories)
    }
    

    render() {
        let inventories = this.state.inventories

        return (
        <div className="inventorystyle">
          <h3 className="p-3 text-center">Inventories</h3>
            <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Category</th> 
                </tr>
            </thead>
            <tbody>
                {inventories.map((inventory, i) => (
                    <InventoryItem inventory={inventory} key={i}/>
                 ))}
            </tbody>
            </table>
        </div>
        );
    }
}

export default Inventories;
  
  