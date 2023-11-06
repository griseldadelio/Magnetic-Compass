import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BarcoCarga from '../../assets/barcoCarga.jpg';
import Representacion from '../../assets/representaciones.jpg';
import Businessman from '../../assets/businessman.jpg';
import { useTranslation } from 'react-i18next';
import './startImage.css';

export const StartImage = () => {
  const [t] = useTranslation('global');
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 imgSize"
          src={BarcoCarga}
          alt="Importacion y Exportacion"
        />
        <Carousel.Caption>
          <p>
            <b className="wrap ">{t('carrousel.Import and Export')}</b>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgSize"
          src={Representacion}
          alt="Representacion de marcas"
        />
        <Carousel.Caption>
          <p>
            <b className="wrap ">{t('carrousel.Brand representation')}</b>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgSize"
          src={Businessman}
          alt="Financiamiento para empresas"
        />
        <Carousel.Caption>
          <p>
            <b className="wrap ">{t('carrousel.Financing for companies')}</b>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
