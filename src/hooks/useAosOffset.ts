import { useEffect, useState } from 'react';
import AOS from 'aos';

export const useAosOffset = () => {
  const [aosOffset, setAosOffset] = useState(-300);

  useEffect(() => {
    const updateAosOffset = () => {
      if (window.innerWidth < 768) {
        setAosOffset(100); // Smaller offset for smaller screens
      } else {
        setAosOffset(-300); // Default offset for larger screens
      }
    };

    window.addEventListener('resize', updateAosOffset);
    updateAosOffset(); // Initial check

    return () => {
      window.removeEventListener('resize', updateAosOffset);
    };
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [aosOffset]);

  return aosOffset;
};
