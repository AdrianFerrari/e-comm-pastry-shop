import { useState, useEffect } from 'react';

function getWindowSize() {
  const { innerWidth: widthforCarousel, innerHeight: heightforCarousel } = window;
  return {
    widthforCarousel,
    heightforCarousel
  };
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize