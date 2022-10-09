import { useEffect, useState } from 'react';

const baseOption = {
  root: null,
  threshold: 0.5,
  rootMargin: '0px',
};

interface IUseIntersectionObserver {
  callback: () => void;
  hasNext?: boolean;
}
const useIntersectionObserver = ({ callback, hasNext }: IUseIntersectionObserver) => {
  const [observerRef, setObserverRef] = useState<any>();
  let observer: IntersectionObserver;

  useEffect(() => {
    if (observerRef) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && hasNext) {
            callback();
          }
        },
        {
          ...baseOption,
        },
      );
      observer.observe(observerRef);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [observerRef, hasNext]);

  return { setObserverRef };
};

export default useIntersectionObserver;
