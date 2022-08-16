import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Logo } from '../Logo';
import { useTranslation } from 'react-i18next';

export const NavBar = () => {
  const [colorChange, setColorChange] = useState(false);
  const [t, i18n] = useTranslation('global');

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
      <Navbar
        className={colorChange ? 'navbar colorChange' : 'navbar'}
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="mt-5 pt-3">
              <Nav.Link className="text-white" href="#servicios">
                <h4>{t('navbar.Services')}</h4>
              </Nav.Link>
              <Nav.Link className="text-white" href="#nosotros">
                <h4>{t('navbar.About Us')}</h4>
              </Nav.Link>
              <Nav.Link className="text-white" href="#contacto">
                <h4>{t('navbar.Contact')}</h4>
              </Nav.Link>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={t('navbar.Language')}
                menuVariant="dark"
                className="mt-1 "
              >
                <NavDropdown.Item
                  onClick={() => i18n.changeLanguage('es')}
                  href="#/action-2"
                >
                  🇪🇸 &nbsp; SPANISH
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => i18n.changeLanguage('en')}
                  href="#/action-1"
                >
                  🇬🇧 &nbsp; ENGLISH
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => i18n.changeLanguage('ch')}
                  href="#/action-3"
                >
                  🇨🇳 &nbsp; CHINESE
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
