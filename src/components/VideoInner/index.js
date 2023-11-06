import React from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './videoInner.css';

export const VideoInner = () => {
  const [t] = useTranslation('global');

  return (
    <div className="hero_inner">
      <video
        className="video_inner"
        autoPlay
        loop
        muted
        src={
          'https://www.hydrogengroup.com/proxy_blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMS8yT3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--52e3be8790cebb9231cf82965ce3ad9e02fdcfc5/website_hero_video_14_1.mp4'
        }
      />
      <div className="title_inner" data-aos="fade-down">
        <div className="text-center display-3 fw-bold">
          {t('VideoInner.text1')}
          <div>{t('VideoInner.text2')}</div>
        </div>
        <div className="mt-4">
          <Button className="btn-green" variant="outline-light">
            <h4>Serch</h4>
          </Button>
          <Button className="btn-white ms-5" variant="outline-light">
            <h4>Selection</h4>
          </Button>
        </div>
      </div>
    </div>
  );
};
