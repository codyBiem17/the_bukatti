import React, {useState} from 'react'
import {Container, Row, Col, Navbar, NavbarBrand, NavbarToggler,
    Nav, NavItem, NavLink, Collapse} from 'reactstrap'

const HomePage = () => {
    const [collapsed, setCollapsed] = useState(true)

    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }

    return (
        <Container className="homepage-container">
            {/* <Row>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">da_bukattee</NavbarBrand>
                    <NavbarToggler />
                    <Collapse>
                    </Collapse>
                </Navbar>
            </Row> */}
            <Row xs="2" id="heroImg-wrapper" style={{"color": "red"}}>
                <Col className="this_homepage" id="heroImg">lorem ipsum vghgffffffcffffffffc</Col>
                <Col className="this_homepage" id="heroImg-caption">yguuu</Col>
            </Row>
        </Container>
    )
}

export default HomePage
