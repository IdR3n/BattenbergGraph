import React from "react";
import {Link} from "react-router-dom";
import {Navbar, NavbarBrand, Nav,NavItem, NavLink} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adding from "../../Pagination/Adding";
function NavStrap() {
    return (
          <Navbar color="danger" light expend="md">
            <NavbarBrand href="http://192.168.10.107:3000">Battenberg Grapher</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="../../Pagination/Adding.js">Adding API</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="../../Pagination/Graphing.js">Graphing</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        
    );
};
export default NavStrap;