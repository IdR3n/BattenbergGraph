import React, {useState} from "react";
import './NavStrap.css';
import {Link} from "react-router-dom";
import {Navbar, NavbarBrand, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adding from "../../Pagination/Adding";
function NavStrap() {
  const [isOpen, setIsOpen] = useState(false);

  // Sidebar'ın açılıp kapanmasını kontrol eden fonksiyon
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
     <Navbar className="my-2" color="danger" expand="md">
        <Button color="light" onClick={toggleSidebar} style={{zIndex: 2, position: 'relative', marginRight: '15px'}}>☰</Button>
        <NavbarBrand href="/" style={{
          zIndex: 1,
          color: 'white'
        }}>          
          Battenberg Grapher
        </NavbarBrand>
      </Navbar>
      {/* Sidebar menü */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`} style={{zIndex: 1}}><br />
        <a href="/">Page D'acceuil</a>
        <a href="/">Add API</a>
        <a href="/">Graphing</a>
      </div>
    </div>
  );
}

export default NavStrap;