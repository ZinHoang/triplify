import { Routes, Route } from 'react-router-dom';
import { About } from './about';
import { Home } from './home';

export const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
