import { useEffect } from 'react';

const useClickOutside = (ref, callback) => {
  const clickHandle = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickHandle);

    return () => {
      document.removeEventListener('click', clickHandle);
    };
  });
};

export default useClickOutside;
