import { Container, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';

const CustomerSite = ({role, setRole}) => {
    const onClick = () => {
        setRole('Anon');
    }


    return (
        <div>
        <Navbar bg="dark" expand="lg">
               <Container>
                   <NavbarBrand href="">Sewing By Suzy. Customer</NavbarBrand>
                   <NavLink href="">Profile</NavLink>
                   <NavLink href="">Orders</NavLink>
                   <NavLink href="">Review</NavLink>
                   <NavLink href="">Log Out</NavLink>
               </Container>
            </Navbar> 
        </div>
    )
}



export default CustomerSite;