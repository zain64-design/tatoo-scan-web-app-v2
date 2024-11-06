import { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';

const useImageParallax = () => {
    const sceneRef = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneRef.current);
        
        return () => {
          parallaxInstance.destroy();
        };
      }, []);
      return sceneRef;
}

export default useImageParallax