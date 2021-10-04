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
import Orders from '../Orders/Orders';
import Reviews from './../Reviews/Reviews';
import Logout from '../Logout/Logout';
import Footer from './../Footer/Footer.jsx';
import React, {Component} from 'react';




class CustomerSite extends Component {
    constructor(props) {
        super(props);
    }

    render (){
        console.log(this.props.user)
        return(
        <div>
        <Router>
            <Navbar className="mynav" variant="light">
                <NavbarBrand href=""><img src={Logo}></img></NavbarBrand>
                <Nav>
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/pricingrates">Pricing/Rates</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/yourorders">Your Orders</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/reviews">Reviews</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/logout">Log Out</Nav.Link></Nav.Item>
                </Nav>
            </Navbar>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/pricingrates' exact component={PricingRates}></Route>
                <Route path='/yourorders'  render={props => <Orders {...props} user={this.props.user.id}/>} />
                <Route path='/reviews' exact component={Reviews}></Route>
                <Route path='/logout'  render={props => <Logout {...props} userRole={this.props.userRole}/>} />
            </Switch>
            <Footer />
            </Router>
        </div>
        );
    }
}

export default CustomerSite;