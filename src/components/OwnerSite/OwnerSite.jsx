import { Container, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';

const OwnerSite = ({role, setRole}) => {
    const onClick = () => {
        setRole('Anon');
    }


    return (
        <div>
        <Navbar bg="dark" expand="lg">
               <Container>
                   <NavbarBrand href="">Sewing By Suzy. Owner</NavbarBrand>
                   <NavLink href="">Profile</NavLink>
                   <NavLink href="">Orders</NavLink>
                   <NavLink href="">Customers</NavLink>
                   <NavLink href="">Employees</NavLink>
                   <NavLink href="">Inventory</NavLink>
                   <NavLink href="">Log Out</NavLink>
               </Container>
            </Navbar> 
        </div>
    )
}



export default OwnerSite;