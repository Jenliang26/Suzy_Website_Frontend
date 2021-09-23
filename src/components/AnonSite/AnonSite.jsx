import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import Logo from './../../Images/SewingBySuzyLogo2.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './../Home/Home';
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
                   <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/pricingrates">Pricing/Rates</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/register">Register</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/orderstatus">Order Status</Nav.Link></Nav.Item>
                </Nav>
            </Navbar>
            <Switch>
                <Route path='/home' exact component={Home}></Route>
            </Switch>
            <Footer />
        </Router>
        </div>
    )
}


export default AnonSite;