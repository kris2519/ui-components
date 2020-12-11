import { useEffect } from 'react';

const useClickOutside = (ref, onClickOutside) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      if (typeof onClickOutside === 'function') {
        onClickOutside();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, onClickOutside]);
};

export default useClickOutside;
