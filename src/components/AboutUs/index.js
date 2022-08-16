import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './aboutus.css';

export const AboutUs = () => {
  const [t] = useTranslation('global');
  return (
    <div
      id="nosotros"
      className="bg-image-about w-100 vh-100 d-flex justify-content-center align-items-center"
    >
      <Container>
        <Card>
          <Card.Body>
            <h1 className="text-white text-center pb-4">
              <b>{t('aboutus.title')}</b>
            </h1>
            <b>
              <p>{t('aboutus.text1')}</p>
              <p>{t('aboutus.text2')}</p>
              <p>{t('aboutus.text3')}</p>
            </b>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
