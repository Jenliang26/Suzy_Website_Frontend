import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';

const CustomerSite = ({role, setRole}) => {
    const onClick = () => {
        setRole('Anon');
    }


    return (
        <div>
            <Navbar className="mynav" variant="light">
                <NavbarBrand href="">Sewing By Suzy. CUSTOMER</NavbarBrand>
                <Nav>
                    <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/pricingrates">Pricing/Rates</Nav.Link></Nav.Item>
                    <Nav.Item><NavLink href="/profile">Profile</NavLink></Nav.Item>
                    <Nav.Item><Nav.Link href="/yourorders">Your Orders</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/review">Review</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/logout">Log Out</Nav.Link></Nav.Item>
                </Nav>
            </Navbar>
        </div>
    )
}

export default CustomerSite;