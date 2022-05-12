import React from 'react'
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'

export default function NavBar() {
  return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container fluid>
                    <Navbar.Brand href="#">e-books Rodriguez</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <NavDropdown title="Género Literario" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Buscar por autor</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Buscar por título</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Buscar por categoría
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                        Sugeridos
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>    
  )
}
