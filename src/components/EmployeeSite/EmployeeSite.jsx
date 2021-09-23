import { Container, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';

const EmployeeSite = ({role, setRole}) => {
    const onClick = () => {
        setRole('Anon');
    }


    return (
        <div>
        <Navbar bg="dark" expand="lg">
               <Container>
                   <NavbarBrand href="">Sewing By Suzy. Employee</NavbarBrand>
                   <NavLink href="">Profile</NavLink>
                   <NavLink href="">Orders</NavLink>
                   <NavLink href="">Customers</NavLink>
                   <NavLink href="">Inventory</NavLink>
                   <NavLink href="">Log Out</NavLink>
               </Container>
            </Navbar>
        </div> 
    )
}



export default EmployeeSite;