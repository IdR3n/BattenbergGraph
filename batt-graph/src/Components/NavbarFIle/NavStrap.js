import React, {useState} from 'react';
//import {Link} from "react-router-dom";
import {Navbar, NavbarBrand, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Adding from "../../Pagination/Adding";
import './NavStrap.css';

function NavStrap() {
  const [isOpen, setIsOpen] = useState(false);

  // Il est controller de ouvrir/fermer le sidebar. 
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
     <Navbar className="my-2" color="dark" expand="md">
        <Button color="light" onClick={toggleSidebar} style={{zIndex: 2, position: 'relative', marginRight: '15px'}}>☰</Button>
        <NavbarBrand href="/" style={{
          zIndex: 1,
          color: 'white'
        }}>
          <img
            alt="logo"
            src={require('../image/Untitled.png')}
            style={{
              height: 50,
              width: 50,
              margin: 15
            }}
          />          
          Battenberg Graph
        </NavbarBrand>
      </Navbar>
      {/* Sidebar menu */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`} style={{zIndex: 1}}><br />
        <a href="/">Page D'acceuil</a>
        <a href="/">Add API</a>
        <a href="/">Graphing</a>
        <a href="/">Documentation</a>
      </div>
    </div>
  );
}

export default NavStrap;