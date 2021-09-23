import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';

const AnonSite = ({role, setRole}) => {
    const onClick = () => {
        setRole('Anon');
    }


    return (
        <div>
           <Navbar className="mynav" variant="light">
                <NavbarBrand href="">Sewing By Suzy. ANON</NavbarBrand>
                <Nav>
                   <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/register">Register</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/orderstatus">Order Status</Nav.Link></Nav.Item>
                </Nav>
            </Navbar> 
        </div>
    )
}


export default AnonSite;