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
  const observer = useRef<IntersectionObserver | null>(null);
  const onIntersect = ([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) callback();
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(onIntersect, {
      threshold,
    });

    if (targetRef.current) observer.current.observe(targetRef.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [threshold]);

  useEffect(() => {
    if (endPoint) observer.current?.disconnect();
    else if (targetRef.current) observer.current?.observe(targetRef.current);
  }, [endPoint, observer, targetRef]);

  return (
    <>
      {children}
      <div ref={targetRef}>더 보기</div>
    </>
  );
};

export default InfiniteScroll;
