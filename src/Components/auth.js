import { Nav, NavItem, NavLink } from 'reactstrap';


const Authentication = () => {

    return (
        <Nav tabs>
            <NavItem>
                <NavLink href="#">Sign In</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Sign Up</NavLink>
            </NavItem>
        </Nav>
    )

}

export default Authentication