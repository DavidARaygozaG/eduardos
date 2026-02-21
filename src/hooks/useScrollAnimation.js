import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = { threshold: 0.1, rootMargin: '0px' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(([entry]) => {
      // Si el elemento entra al viewport, actualizamos estado
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Opcional: Desconectar el observer si solo queremos que se anime una vez
        // observer.unobserve(currentRef);
      } else {
        // Remover esto si solo queremos que la animación ocurra una vez (al bajar)
        setIsVisible(false);
      }
    }, options);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.rootMargin, options.threshold]); // Dependencias del observer

  return [ref, isVisible];
};
