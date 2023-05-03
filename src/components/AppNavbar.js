//~ React Libraries
import React from "react";
import PropTypes from "prop-types";

//~ Bootstrap Components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function AppNavbar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <img src="./logo/logo.png" alt="" style={{width:'2rem', marginRight:'0.2rem'}}/>
        {/* <Navbar.Brand href="#">{props.title}</Navbar.Brand> */}
        <Navbar.Brand href="#">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">{props.about}</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
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
  );
}

AppNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

AppNavbar.defaultProps = {
  title: "title",
  about: "exampleText",
};
