import React  from "react";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Nav, NavLink, Navbar, NavbarBrand } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Container>
          <NavbarBrand href="/">Who`s In Town</NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse
            id="responsive-navbar-nav"
            className="justify-content-between">
            <Nav>
             
              <NavLink href="/favorites">Favorites</NavLink>
            </Nav>
          </NavbarCollapse>
         
        </Container>
      </Navbar>

      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/favorites" Component={Favorites} />
          
        </Routes>
      </Router>
    </>
  );
}