import React from 'react';
import { Header } from './sections/header/Header';
import { MainContent } from './sections/MainContent';

const App = () => {
  return (
    <>
      {/* contain top nav bar, footer and the maincontent */}
      <Header />;
      <MainContent />
    </>
  );
};

export default App;
