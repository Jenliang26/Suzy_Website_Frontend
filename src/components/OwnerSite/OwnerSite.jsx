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

const OwnerSite = ({role, setRole}) => {
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
                    <Nav.Item><Nav.Link href="/orders">Orders</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/employees">Employees</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/customers">Customers</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/inventory">Inventory</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/logout">Log Out</Nav.Link></Nav.Item>
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


export default OwnerSite;