import React from 'react';
import {
  Footer,
  NavBar,
  Main,
  StartImage,
  CardImage,
  AboutUs,
} from '../../components';
import { useTranslation } from 'react-i18next';
import './home.css';
import { Container } from 'react-bootstrap';

export const Home = () => {
  const [t] = useTranslation('global');

  return (
    <>
      <NavBar />
      <div style={{ overflowY: 'scroll' }} id="home"></div>
      <StartImage />
      <Main>
        <Container
          fluid
          className="bg-dark text-white p-5"
          data-aos="zoom-in-up"
        >
          <h2 className="text-center p-4">{t('startTxt.title')}</h2>
          <p className="d-flex justify-content-center aligne-center">
            {t('startTxt.text')}
          </p>
        </Container>
        <CardImage />
        <AboutUs />
      </Main>
      <Footer />
    </>
  );
};
