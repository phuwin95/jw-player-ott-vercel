import { useEffect, useRef } from 'react';

const useTouchOutside = <T>(callback: () => void, enableFlag: boolean) => {
  const ref = useRef<T>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !(ref.current as unknown as HTMLElement).contains(event.target as Node) && enableFlag) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, enableFlag]);
  return ref;
};

export default useTouchOutside;
