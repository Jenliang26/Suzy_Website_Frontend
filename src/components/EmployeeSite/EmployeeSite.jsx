import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import Logo from './../../Images/SewingBySuzyLogo2.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './../Home/Home';
import MasterOrders from '../MasterOrders/MasterOrders';
import CustomerList from '../CustomerList/CustomerList';
import Inventories from '../Inventory/Inventory';
import CreateOrder from '../MasterOrders/CreateOrder';
import Logout from '../Logout/Logout';
import Footer from './../Footer/Footer.jsx';
import React, {Component} from 'react';
import CustomerSite from '../CustomerSite/CustomerSite';


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
                    <Nav.Item><Nav.Link href="/customers">Customers</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/masterorders">Orders</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/inventory">Inventory</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/logout">Log Out</Nav.Link></Nav.Item>
                </Nav>
            </Navbar>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/masterorders' render={props => <MasterOrders {...props} user={this.props.user}/>} />
                <Route path='/customers' render={props => <CustomerList {...props}/>} />
                <Route path='/inventory' render={props => <Inventories {...props}/>} />
                <Route path='/neworder' render={props => <CreateOrder {...props}/>} />
                <Route path='/logout'  render={props => <Logout {...props} userRole={this.props.userRole}/>} />
            </Switch>
            <Footer />
        </Router>
        </div>
        );
    }
}



export default EmployeeSite;