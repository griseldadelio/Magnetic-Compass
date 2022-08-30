import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Logo } from '../Logo';
import * as Icon from 'react-bootstrap-icons';
import './footer.css';

export const Footer = () => {
  return (
    <footer id="contacto" className=" bg-dark">
      <Container className="main-footer bg-dark text-center">
        <Row>
          <Col className="mb-3">
            <Logo />
          </Col>
          <Col>
            <div className="pt-2">
              <Icon.Envelope />
              <a
                className="changepage ps-2"
                href="mailto:info@magneticcompasssrl.com"
              >
                info@magneticcompasssrl.com
              </a>
            </div>
            <div className="pt-2">
              <Icon.GeoAlt />
              &nbsp; Aranguren 2443 2º C, CABA, Buenos Aires.
            </div>
            <div className="pt-2">
              <Icon.GeoAlt />
              &nbsp; Calle Nº 43 1228, La Plata, Buenos Aires.
            </div>
          </Col>
          <Col>
            <div className="pt-2">
              <Icon.Whatsapp />
              <a
                href="https://api.whatsapp.com/send?phone=5491126645898&text=Hola Magnetic Compass, necesito más información!"
                target="blank"
                className="changepage"
              >
                &nbsp; (549) 1126645898
              </a>
            </div>
            <div className="pt-2">
              <Icon.Whatsapp />
              <a
                href="https://api.whatsapp.com/send?phone=5492215348731&text=Hola Magnetic Compass, necesito más información!"
                target="blank"
                className="changepage"
              >
                &nbsp; (549) 2215 348731
              </a>
            </div>
            <div className="social-media">
              <a
                className="link"
                href="https://www.linkedin.com/in/magnetic-compass/"
                target="blank"
              >
                <Icon.Linkedin className="Icon" />
              </a>
              <a
                className="link"
                href="https://www.instagram.com/magneticcompassok/"
                target="blank"
              >
                <Icon.Instagram className="Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="sign">
        © 2022 Magnetic Compass S.R.L Todos Los Derechos Reservados
      </div>
    </footer>
  );
};
