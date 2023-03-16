import React, { useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/navStyles.module.css";

export default function MainNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = (isOpen, event, metadata) => {
    setIsDropdownOpen(isOpen);
  };

  return (
    <div className={styles.navbarWrapper}>
      <img
        src="/logo.jpeg"
        alt="Company Logo"
        className={styles.companyLogo}
      />
      <Navbar expand="lg" variant="dark" sticky="top" className={`${styles.navbar} bg-success`}>
        <Container>
          <Navbar.Brand href="/" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Link href="/" passHref className={styles.link}>
              <Nav.Link as="div" className={styles.navLink}>關於我們</Nav.Link>
            </Link>
            <Link href="/item" passHref className={styles.link}>
              <Nav.Link as="div" className={styles.navLink}>回收項目</Nav.Link>
            </Link>
            <Link href="/process" passHref className={styles.link}>
              <Nav.Link as="div" className={styles.navLink}>回收工序</Nav.Link>
            </Link>
            <Link href="/vision" passHref className={styles.link}>
              <Nav.Link as="div" className={styles.navLink}>我們的願景</Nav.Link>
            </Link>
            <Link href="/contact" passHref className={styles.link}>
              <Nav.Link as="div" className={styles.navLink}>聯絡我們</Nav.Link>
            </Link>
         
            <NavDropdown
                title="更多"
                id="basic-nav-dropdown"
                onToggle={handleDropdownToggle}
              >
                {/* Add your NavDropdown.Item components here */}
            </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
