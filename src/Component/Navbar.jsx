import React from 'react'
import { Navbar, Nav, Container, Form, Button, FormControl } from 'react-bootstrap'

export default function Home() {

    return (
        <div>

            <Container>
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                    <Navbar.Brand href="#home">GITHUB JOBS</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">All Job</Nav.Link>
                        <Nav.Link href="#features">Contact Us</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </Container>

        </div>
    )
}
