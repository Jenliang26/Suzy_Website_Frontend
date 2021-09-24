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
import Footer from './../Footer/Footer.jsx';

const AnonSite = ({role, setRole}) => {
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
                   <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/register">Register</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/orderstatus">Order Status</Nav.Link></Nav.Item>
                </Nav>
            </Navbar>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/pricingrates' exact component={PricingRates}></Route>
                <Route path='/login' exact component={Login}></Route>
            </Switch>
            <Footer />
        </Router>
        </div>
    )
}


export default AnonSite;