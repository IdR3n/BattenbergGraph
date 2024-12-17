import React, {useState} from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,NavItem, NavLink, UncontrolledDropdown, DropdownToggle,DropdownMenu, DropdownItem,NavbarText,} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavStrap(args) {
    const [isOpen, setIsOpen] = useState(false);
        
          const toggle = () => setIsOpen(!isOpen);
    return (
          <div>
              <Navbar {...args}>
                <NavbarBrand href="/">Battenberg Grapher</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="me-auto" navbar>
                    <NavItem>
                      <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://github.com/IdR3n/BattenbergGraph/tree/dev">
                        GitHub
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Options
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem href="./Pagination/Adding.js">Add API
                        </DropdownItem>
                        <DropdownItem href="./Pagination/Graphing.js">Graphing</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="http://192.168.10.107:3000">Reset</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                  <NavbarText>Fondation Battenberg 2024-2025 published</NavbarText>
                </Collapse>
              </Navbar>
            </div>
        
    );
};
export default NavStrap;