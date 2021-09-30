import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import "./CustomerList.css";


class CustomerSearch extends Component {


    render() {
        return(
            <div class="input-group">
                <div class="input-group-append"><label id="SearchWord">Search</label></div>
                <input type="text" id="searchbar"></input>
                <div class="input-group-append"><Button variant='info' id="GoButton" type="submit">Go</Button></div>
            </div>
            
        ); 
    }
}

export default CustomerSearch;