import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';

const AnonSite = ({role, setRole}) => {
    const onClick = () => {
        setRole('Anon');
    }


    return (
        <div>
           <Navbar bg="black" variant="dark">
                <NavbarBrand href="">Sewing By Suzy. ANON</NavbarBrand>
                <Nav>
                   <Nav.Item><Nav.Link href="/Home">Home</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/register">Register</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/order status">Order Status</Nav.Link></Nav.Item>
                </Nav>
            </Navbar> 
        </div>
    )
}



export default AnonSite;