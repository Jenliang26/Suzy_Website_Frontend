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

const EmployeeSite = ({role, setRole}) => {
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
                    <Nav.Item><Nav.Link href="/profile">Profile</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/orders">Orders</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/customers">Customers</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/inventory">Inventory</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/logout">Log Out</Nav.Link></Nav.Item>
                </Nav>
            </Navbar>
            <Switch>
                <Route path='/' exact component={Home}></Route>
            </Switch>
            <Footer />
        </Router>
        </div>
    )
}



export default EmployeeSite;