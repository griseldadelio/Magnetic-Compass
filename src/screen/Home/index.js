import React from 'react';
import {
  Footer,
  NavBar,
  Main,
  VideoInner,
  CardImage,
  AboutUs,
} from '../../components';
import './home.css';

export const Home = () => {
  return (
    <>
      <NavBar />
      <div style={{ overflowY: 'scroll' }} id="home"></div>
      <VideoInner />
      <Main>
        <CardImage />
        <AboutUs />
      </Main>
      <Footer />
    </>
  );
};
