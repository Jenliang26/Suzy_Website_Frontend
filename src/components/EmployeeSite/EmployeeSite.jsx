import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import Logo from './../../Images/SewingBySuzyLogo2.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './../Home/Home';
import Orders from '../Orders/Orders';
// import Inventory from './../Inventory/Inventory';
import Footer from './../Footer/Footer.jsx';
import React, {Component} from 'react';

class EmployeeSite extends Component {
    constructor(props) {
        super(props);
    }

    render (){
        return(
        <div>
        <Router>
            <Navbar className="mynav" variant="light">
                <NavbarBrand href=""><img src={Logo}></img></NavbarBrand>
                <Nav>
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/orders">Orders</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/customers">Customers</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/inventory">Inventory</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/logout">Log Out</Nav.Link></Nav.Item>
                </Nav>
            </Navbar>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/orders'  render={props => <Orders {...props} user={this.props.user}/>} />
                {/* <Route path='/inventory' exact component={Inventory}></Route> */}
            </Switch>
            <Footer />
        </Router>
        </div>
        );
    }
}



export default EmployeeSite;