import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Logo } from '../Logo';
import * as Icon from 'react-bootstrap-icons';
import './footer.css';

export const Footer = () => {
  return (
    <footer id="contacto">
      <Container className="main-footer  text-center">
        <Row>
          <Col className="mb-3">
            <Logo />
          </Col>
          <Col>
            <div className="pt-3">
              <Icon.Envelope />
              <a className="changepage ps-2" href="mailto:info@unextalent.com">
                info@unextalent.com
              </a>
            </div>
            <div className="pt-4">
              <Icon.GeoAlt />
              &nbsp; O'Higgins 2199, CABA, Buenos Aires.
            </div>
          </Col>
          <Col>
            <div className="pt-2">
              <Icon.Whatsapp />
              <a
                href="https://api.whatsapp.com/send?phone=549111165109632&text=Hola Unex Talent, necesito más información!"
                target="blank"
                className="changepage"
              >
                &nbsp; (549) 1165109632
              </a>
            </div>
            <div className="social-media">
              <a
                className="link"
                href="https://www.linkedin.com/in/unextalent/"
                target="blank"
              >
                <Icon.Linkedin className="Icon" />
              </a>
              <a
                className="link"
                href="https://www.instagram.com/unextalent/"
                target="blank"
              >
                <Icon.Instagram className="Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="sign">
        © 2023 Unex Talent S.R.L Todos Los Derechos Reservados
      </div>
    </footer>
  );
};
