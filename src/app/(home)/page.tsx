'use client';
import InfiniteScroll from '@Components/shared/InfiniteScroll';
import { useState } from 'react';

const MainPage = () => {
  const [count, setCount] = useState(10);
  const callbackFunction = () => {
    console.log('trigger');
    setCount(count + 10);
  };

  return (
    <article className="mx-auto max-w-[720px] text-white">
      <h1 className="">양방향 스크롤</h1>

      <ul className="flex flex-col">
        <InfiniteScroll callback={callbackFunction} threshold={1} endPoint={false}>
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
