import { useState, useEffect } from 'react';

function useWindowWidth() {
  const isServer = typeof window === 'undefined';
  const [windowWidth, setWindowWidth] = useState(isServer ? 1920 : window.innerWidth);

  function handleResize() {
    setWindowWidth(isServer ? 1920 : window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
}

export default useWindowWidth;
