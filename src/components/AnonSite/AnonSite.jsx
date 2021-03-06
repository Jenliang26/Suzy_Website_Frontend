import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import Logo from './../../Images/SewingBySuzyLogo2.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './../Home/Home';
import PricingRates from './../PricingRates/PricingRates';
import Login from './../Login/Login';
import Register from './../Register/Register';
import OrderStatus from './../OrderStatus/OrderStatus';
import Footer from './../Footer/Footer.jsx';
import React, {Component} from 'react';


class AnonSite extends Component {
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
                   <Nav.Item><Nav.Link href="/pricingrates">Pricing/Rates</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/register">Register</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/orderstatus">Order Status</Nav.Link></Nav.Item>
                </Nav>
            </Navbar>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/pricingrates' exact component={PricingRates}></Route>
                <Route path='/login'  render={props => <Login {...props} userRole={this.props.userRole} user={this.props.user}/>} />
                <Route path='/register' exact component={Register}></Route>
                <Route path='/orderstatus' exact component={OrderStatus}></Route>
            </Switch>
            <Footer />
        </Router>
        </div>
        );
    }
}


export default AnonSite;