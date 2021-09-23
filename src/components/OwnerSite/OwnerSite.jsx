import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';

const OwnerSite = ({role, setRole}) => {
    const onClick = () => {
        setRole('Anon');
    }


    return (
        <div>
            <Navbar bg="black" variant="dark">
                <NavbarBrand href="">Sewing By Suzy. OWNER</NavbarBrand>
                <Nav>
                    <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/orders">Orders</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/employees">Employees</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/customers">Customers</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/inventory">Inventory</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/logout">Log Out</Nav.Link></Nav.Item>
                </Nav>
            </Navbar>
        </div>
    )
}


export default OwnerSite;