import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Head = (props) => {
  const logoutHandler = () => {
    props.CloggedIn(false);
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="mdb-color darken-3"
        variant="dark"
      >
        <Navbar.Brand href="/">Movie posts</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {props.loggedIn ? (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto mr-2">
              <Nav.Link as={Link} to="/">
                Movies
              </Nav.Link>
              <Nav.Link as={Link} to="/AddMovie">
                Add Movie
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/LoginPage" onClick={logoutHandler}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        ) : null}
      </Navbar>
      ;
    </div>
  );
};

export default Head;
