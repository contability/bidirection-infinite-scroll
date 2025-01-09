'use client';

import { PropsWithChildren, useEffect, useRef } from 'react';

export interface InfiniteScrollProps {
  callback: () => void;
  threshold: number;
  endPoint: boolean;
}

const InfiniteScroll = ({ children, ...props }: PropsWithChildren<InfiniteScrollProps>) => {
  const { callback, threshold, endPoint } = props;
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

  return (
    <>
      {children}
      <div ref={targetRef}>아래</div>
    </>
  );
};

export default InfiniteScroll;
