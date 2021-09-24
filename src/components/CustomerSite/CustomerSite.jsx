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
import Footer from './../Footer/Footer.jsx';

const CustomerSite = ({role, setRole}) => {
    const onClick = () => {
        setRole('Anon');
    }


    return (
        <div>
        <Router>
            <Navbar className="mynav" variant="light">
                <NavbarBrand href=""><img src={Logo}></img></NavbarBrand>
                <Nav>
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/pricingrates">Pricing/Rates</Nav.Link></Nav.Item>
                    <Nav.Item><NavLink href="/profile">Profile</NavLink></Nav.Item>
                    <Nav.Item><Nav.Link href="/yourorders">Your Orders</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/review">Review</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/logout">Log Out</Nav.Link></Nav.Item>
                </Nav>
            </Navbar>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/pricingrates' exact component={PricingRates}></Route>
            </Switch>
            <Footer />
            </Router>
        </div>
    )
}

export default CustomerSite;