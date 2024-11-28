import React, { useEffect } from 'react';
import { Header } from './sections/header/Header';
import { MainContent } from './sections/MainContent';
import { Footer } from './sections/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <Header />;
      <MainContent />
      <Footer />
    </>
  );
};

export default App;
