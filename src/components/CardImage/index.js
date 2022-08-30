import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';
import './cardimage.css';

export const CardImage = () => {
  const [t] = useTranslation('global');

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Container id="servicios" className="p-5">
      <Row className="mt-3" data-aos="fade-right" data-aos-duration="1500">
        <Col className="imgcard col col-sm-4" sm={4} />
        <Col className="col-sm-8 p-2" sm={8}>
          <h2 className="text-center">{t('cardImg1.title')}</h2>
          <p className="text-justify px-3">{t('cardImg1.text1')}</p>
        </Col>
      </Row>
      <br />
      <Row
        className="mt-3 bg-light"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <Col className="col-sm-8 p-2" sm={8}>
          <h2 className="text-center">{t('cardImg2.title')}</h2>
          <p className="text-justify px-3">{t('cardImg2.text1')}</p>
          <p className="text-justify px-3">{t('cardImg2.text2')}</p>
        </Col>
        <Col className="imgcard1 col col-sm-4" sm={4} />
      </Row>
      <br />
      <Row className="mt-3" data-aos="fade-right" data-aos-duration="1500">
        <Col className="imgcard2 col col-sm-4" sm={4} />
        <Col className="col-sm-8 p-2" sm={8}>
          <h2 className="text-center">{t('cardImg3.title')}</h2>
          <p className="text-justify px-3">{t('cardImg3.text1')}</p>
          <p className="text-justify px-3">{t('cardImg3.text2')}</p>
          <p className="text-justify px-3">
            {t('cardImg3.text3')}&nbsp;
            <i>
              <b>{t('cardImg3.text4')}</b>
            </i>
          </p>
          <Row>
            <Col>
              <div className="text-justify px-3 lista-azul">
                <ul>
                  <li>{t('cardImg3.item1')}</li>
                  <li>{t('cardImg3.item2')}</li>
                  <li>{t('cardImg3.item3')}</li>
                  <li>{t('cardImg3.item4')}</li>
                  <li>{t('cardImg3.item5')}</li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="text-justify px-3 lista-azul">
                <ul>
                  <li>{t('cardImg3.item6')}</li>
                  <li>{t('cardImg3.item7')}</li>
                  <li>{t('cardImg3.item8')}</li>
                  <li>{t('cardImg3.item9')}</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <Row
        className="mt-3 bg-light"
        data-aos="fade-left"
        data-aos-duration="1500"
        id="about"
      >
        <Col className="col-sm-8 p-2" sm={8}>
          <h2 className="text-center">{t('cardImg4.title')}</h2>
          <p className="text-justify px-3">{t('cardImg4.text1')}</p>
          <p className="text-justify px-3">{t('cardImg4.text2')}</p>
        </Col>
        <Col className="imgcard3 col col-sm-4" sm={4} />
      </Row>
      <br />
      <Row className="mt-3" data-aos="flip-up" data-aos-duration="1500">
        <Col className="p-2">
          <h2 className="text-center">{t('cardImg5.title')}</h2>
          <p className="text-justify px-3">{t('cardImg5.text1')}</p>
          <p className="text-justify px-3">{t('cardImg5.text2')}</p>
          <Row>
            <Col>
              <div className="text-justify px-3 lista-azul">
                <ul>
                  <li>{t('cardImg5.item1')} </li>
                  <li>{t('cardImg5.item2')}</li>
                  <li>{t('cardImg5.item3')}</li>
                  <li>{t('cardImg5.item4')}</li>
                  <li>{t('cardImg5.item5')}</li>
                  <li>{t('cardImg5.item6')}</li>
                  <li>{t('cardImg5.item7')}</li>
                  <li>{t('cardImg5.item8')}</li>
                  <li>{t('cardImg5.item9')}</li>
                  <li>{t('cardImg5.item10')}</li>
                  <li>{t('cardImg5.item11')}</li>
                  <li>{t('cardImg5.item12')}</li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="text-justify px-3 lista-azul">
                <ul>
                  <li>{t('cardImg5.item13')}</li>
                  <li>{t('cardImg5.item14')}</li>
                  <li>{t('cardImg5.item15')} </li>
                  <li>{t('cardImg5.item16')}</li>
                  <li>{t('cardImg5.item17')}</li>
                  <li>{t('cardImg5.item18')}</li>
                  <li>{t('cardImg5.item19')}</li>
                  <li>{t('cardImg5.item20')} </li>
                  <li>{t('cardImg5.item21')} </li>
                  <li>{t('cardImg5.item22')}</li>
                  <li>{t('cardImg5.item23')}</li>
                  <li>{t('cardImg5.item24')}</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
