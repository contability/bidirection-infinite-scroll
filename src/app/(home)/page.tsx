'use client';
import InfiniteScroll from '@Components/shared/InfiniteScroll';
import { useState } from 'react';
import useTopScreenEventHandler from '../../hooks/useTopScreenEventHandler';

const MainPage = () => {
  const [count, setCount] = useState(10);
  const { onWheel, onTouchEnd, onTouchStart } = useTopScreenEventHandler({
    isCallable: true,
    callback: () => console.log('top screen event trigger'),
    scrollOffset: 20,
    touchDistanceCriterion: -50,
    wheelDistanceCriterion: -10,
  });
  const callbackFunction = () => {
    setCount(state => state + 10);
  };

  return (
    <article
      className="mx-auto max-w-[720px] text-white"
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <h1 className="">양방향 스크롤</h1>

      <ul className="flex flex-col">
        <InfiniteScroll callback={callbackFunction} threshold={0} endPoint={false}>
          {Array.from({ length: count }, (_, index) => (
            <li key={index} className="h-[200px]">
              {String(index)}
            </li>
          ))}
        </InfiniteScroll>
      </ul>
    </article>
  );
};

export default MainPage;
