import { InfiniteScrollProps } from '@Components/shared/InfiniteScroll';
import { useEffect, useRef } from 'react';

const useIntersectionObserver = ({ callback, threshold, endPoint }: InfiniteScrollProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const onIntersect = ([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) callback();
  };
  const observer = useRef(
    new IntersectionObserver(onIntersect, {
      threshold,
    }),
  ).current;

  useEffect(() => {
    if (endPoint) return observer && observer.disconnect();
    if (targetRef && targetRef.current) observer.observe(targetRef.current);
    return () => observer && observer.disconnect();
  }, [endPoint, observer, targetRef]);

  return { targetRef };
};

export default useIntersectionObserver;
